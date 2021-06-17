import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState([])

  useEffect(() => {
    window.addEventListener("scroll", () => {

      window.scrollY > 100 
      ? handleShow(true) 
      : handleShow(false);
    });

    return ()=>{
        window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className= {` nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5376b1a0-c286-4e7e-b6e3-cfa8cc419805/decmi2r-93f7c3ce-24fb-40dd-a8c1-af74d064405b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNzZiMWEwLWMyODYtNGU3ZS1iNmUzLWNmYThjYzQxOTgwNVwvZGVjbWkyci05M2Y3YzNjZS0yNGZiLTQwZGQtYThjMS1hZjc0ZDA2NDQwNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YigqgFCqDchbrTmqU3R3DCpv-2xkRSs9VYg30DzlYw8"
        alt="NetFlix Logo"
        
      />

      <img
        className="nav_avatar"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5376b1a0-c286-4e7e-b6e3-cfa8cc419805/decmi2r-93f7c3ce-24fb-40dd-a8c1-af74d064405b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNzZiMWEwLWMyODYtNGU3ZS1iNmUzLWNmYThjYzQxOTgwNVwvZGVjbWkyci05M2Y3YzNjZS0yNGZiLTQwZGQtYThjMS1hZjc0ZDA2NDQwNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YigqgFCqDchbrTmqU3R3DCpv-2xkRSs9VYg30DzlYw8"
        alt="NetFlix Avatart"
      />
    </div>
  );
}

export default Nav;
