//Always do investigative study cause it is the best way to learn
//i know so far

//taking the reference of the element with class name 'insert'
const insert = document.getElementById('insert');
//we got the reference

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'space' : e.key}</td>
      <td>${e.keycode}</td>
      <td>${e.code}</td>
    </tr>
  </table> 
    <div/>
  `;
});
