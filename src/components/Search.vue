<template>
  <div class="search-container">
    <label for="date-input">Select a date:</label>
    <input type="date" id="date-input" />
  </div>
  <button id="fetch-button">Search photo</button>
</template>
<style scoped>
.search-container {
  grid-column: span 3; /*cupa as duas colunas*/
  display: grid;
  grid-template-columns: 1fr 2fr; /* Divide a largura em duas colunas de 50%*/
  gap: 2rem;
  align-items: center;
}
input {
  cursor: pointer;
  background: transparent;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: rgba(224, 224, 224, 0.76);
  background: rgba(2, 255, 171, 0.438);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border-radius: 5rem;
  padding: 0.5rem 2rem;
  /* max-width: 46%; */
}
button {
  cursor: pointer;
  grid-column: span 3;
  padding: 1rem 2rem;
  background: rgba(2, 255, 171, 0.438);
  color: rgba(224, 224, 224, 0.76);
  border: none;
  border-radius: 5rem;
  text-transform: capitalize;
  font-weight: bold;
  transition: 0.3s ease;
  font-family: inherit;
}
button:hover {
  box-shadow: 7px 7px 1px 0 rgba(31, 135, 83, 0.37);
}
@media (min-width: 1024px) {
  .search-container {
    grid-column: span 2; /* Ocupa as duas colunas */
    display: grid;
    grid-template-columns: 1fr 1fr; /* Divide a largura em duas colunas de 50% */
    gap: 2rem;
    align-items: center;
  }
  input{
    max-width: 100%;
  }
  button{
    grid-column: span 2;
  }
}
</style>
