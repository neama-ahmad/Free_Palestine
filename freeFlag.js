class FreePalestine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .Palestine-section {
          font-family: 'Short Stack', cursive;
          display:flex;
          width: max-content;
          gap:1rem;
        }

        .Palestine-section p {
          font-size: 15px;
          color: #000
        }

        .Palestine-section .flag {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
          height: auto;
          position: relative;
        }

        .Palestine-section .column {
          width: 100%;
          height: 16px;
        }

        .Palestine-section .black {
          background-color: black;
        }

        .Palestine-section .white {
          background-color: white;
        }

        .Palestine-section .green {
          background-color: green;
        }

        .red-triangle {
          display: flex;
          flex-direction: column;
          width: 0;
          height: 0;
          border-top: 24px solid transparent;
          border-bottom: 24px solid transparent;
          border-left: 24px solid red;
          position: absolute;
          top: 0;
          left: 0;
        }

        @media (max-width: 1200px) {
          .Palestine-section {
            width: 100%;
            height: 80px;
          }

          .Palestine-section p {
            font-size: 14px;
          }

          .Palestine-section .column {
            width: 100%;
            height: 14px;
          }

          .red-triangle {
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 20px solid red;
          }
        }
      </style>

      <div class="Palestine-section">
        <div class="flag">
          <div class="column black"></div>
          <div class="column white"></div>
          <div class="column green"></div>
          <div class="red-triangle"></div>
        </div>
        <p>Free Palestine</p>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('free-palistaine', FreePalestine);
