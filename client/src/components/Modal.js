class Modal {
  constructor() {
    this._modal = document.querySelector("#modal");
    this._modalBtn = document.querySelector("#modal-btn");
    this.addEventListeners();
  }

  addEventListeners() {
    this._modalBtn.addEventListener("click", this.open.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
  }
  open() {
    this._modal.style.display = "block";
  }

  close() {
    this._modal.style.display = "none";
  }

  outsideClick(e) {
    //console.log(e.target);
    if (e.target === this._modal) {
      this.close();
    }
  }
}

export default Modal;

// function Modal() {
//   const modal = document.querySelector("#modal");
//   const modalBtn = document.querySelector("#modal-btn");

//   modalBtn.addEventListener("click", open);
//   window.addEventListener("click", outsideClick);

//   function open() {
//     modal.style.display = "block";
//   }

//   function close() {
//     modal.style.display = "none";
//   }

//   function outsideClick(e) {
//     //console.log(e.target);
//     if (e.target === modal) {
//       close();
//     }
//   }
// }

// export default Modal;
