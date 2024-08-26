import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    resultado: null,
    valorA: 0,
    valorB: 0,
    valorC: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valor = calcular(formData.valorA,formData.valorB,formData.valorC)
    setFormData({...formData,resultado:valor})
    alert('el valore es ' + valor);
    console.log('Form data submitted:', formData);
  };
  function calcular(a, b, c) {
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant < 0) {
      return 'ingresar el primer valor en negativo';
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return `ingrse un valor diferente a cero = ${root}`;
    } 
  }


  return (
    <form onSubmit={handleSubmit}>
      
      <div>
      
        <label>Ingrese el valor de A:</label>
        <input type="number" name="valorA" value={formData.valorA} onChange={handleChange}
        />
      
        <label>Ingrese el valor de B:</label>
        <input type="number" name="valorB" value={formData.valorB} onChange={handleChange}
        />
      
        <label>Ingrese el valor de  C:</label>
        <input type="number" name="valorC" value={formData.valorC} onChange={handleChange}
        />
      
        <label> el resultado es </label>
        <label> {formData.resultado}  </label>
      
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
}

export default Formulario;