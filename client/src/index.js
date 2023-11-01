import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";
import "./css/style.css";

//Modal();
const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
const ideaList = new IdeaList();
// deleted from here and added to ideaList.js
// ideaList.render()
