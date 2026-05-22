html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

#map {
  width: 100%;
  height: 100%;
}

#topbar {
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 1000;
}

#search-input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
}

#search-results {
  position: fixed;
  top: 60px;
  left: 10px;
  right: 10px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  z-index: 1000;
  display: none;
}

.search-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.search-item:hover {
  background: #f3f3f3;
}

#bottom-sheet {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -100%;
  background: white;
  border-radius: 20px 20px 0 0;
  transition: .3s;
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 -2px 20px rgba(0,0,0,.2);
}

#bottom-sheet.open {
  bottom: 0;
}

#toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 999px;
  opacity: 0;
  transition: .3s;
  z-index: 2000;
}

#toast.show {
  opacity: 1;
}
