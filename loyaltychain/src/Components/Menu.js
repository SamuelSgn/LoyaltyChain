import React, { useState, useEffect } from "react";
import '../styles/Menu.css';
import Sidebar from "../Users/Sidebar";
import Searchbar from "../Users/Searchbar";
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menu, setMenu] = useState([]);
  const [button, set_button] = useState("Ajouter au menu")
  const [image, setImage] = useState('');
  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuItem({ ...newMenuItem, [name]: value });
  };

  const handleImageUpload = (e) => {
    // Code pour gérer le téléchargement de l'image
    setImage(e.target.files[0]);
    setNewMenuItem({ ...newMenuItem, 'image': image});
  };
  
  const handleAddMenuItem =  (set_button, button) => {
    let imageUrl = "";
    // alert("ok");
    console.log(newMenuItem);
    console.log(image);
    if (newMenuItem.name !== "" && newMenuItem.description !== "" && newMenuItem.price !== 0  && button === "Ajouter au menu") {
      set_button("Ajout...");
      const formData = new FormData();
      formData.append('image', image);
      console.log(menuItems.image);
      
        axios.post("http://localhost:5000/upload-images", formData)
        .then((res)=>{
          if (res.data.message === "Une erreur est survenue.") {
            alert("Connection failed");
            set_button("Ajouter au menu")
          } else {
            imageUrl = res.data[0];
            axios.post("http://localhost:5000/Menu", { ...newMenuItem, imageUrl }, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem("kitchen") 
              }
            })
            .then((response)=>{
              if (response.data.message === "Erreur pour ajouter cet élément au menu") {
                alert("db erreur")
                set_button("Ajouter au menu")
              } else {
                alert(response.data)
                set_button("Ajouter au menu")
              }
            }).catch((error)=>{
              console.log(error);
              alert("axios error")
              set_button("Ajouter au menu")
            })
            
          }
        }).catch((err)=>{
          console.log(err);
          alert("axios error")
          set_button("Ajouter au menu")
        })
        console.log(imageUrl)
        setMenuItems([...menuItems, { ...newMenuItem, image: imageUrl }]); 
        setNewMenuItem({ name: "", description: "", price: 0, image: "" });
        
      }
    };
    
    useEffect(() => {
      axios.get("http://localhost:5000/Menu", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("kitchen")
        }
      })
      .then((response)=> {
        console.log(response);
        if (response.status === 500) {
          console.log(response.data);
        } else {
          setMenu(response.data);
        }
      })
      .catch((error) => {
        // setMenu(error);
        alert("axios error");
      })
    }, [setMenu])

  return (
    <div className="menu">
      <Sidebar/>
      <Searchbar/>
      <h1>Menu du Restaurant</h1>

      <div className="add-item-form">
        <h2>Ajouter un Nouveau Plat</h2>
        <input
          type="text"
          name="name"
          placeholder="Nom du Plat"
          value={newMenuItem.name}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description du Plat"
          value={newMenuItem.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Prix (FCFA)"
          value={newMenuItem.price}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button onClick={()=>{
          handleAddMenuItem(set_button, button)
        }}>{button}</button>
      </div>

      <ul>
        {menu.map((item, index) => (
          
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Prix : {item.Prix} FCFA</p>
            <img src={item.URL} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

