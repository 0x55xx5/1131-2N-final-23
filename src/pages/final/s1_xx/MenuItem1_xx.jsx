/*const MenuItem1_xx = () => {
  return (
    <article key={id} className='menu-item'>
      <h1>MenuItem1_xx</h1>
    </article>
  );
};

export default MenuItem1_xx;*/

const MenuItem_23 = ({ id, title, img, price, descrip }) => {
  return (
    <article key={id} className='menu-item'>
      <img src={img} alt='buttermilk' pancakes='' className='photo' />
      <div className='item-info'>
        <header>
          <h4>
            {id}-{title}
          </h4>
          <h4 className='price'>${price}</h4>
        </header>
        <p className='item-text'>{descrip}</p>
      </div>
    </article>
  )
}

export default MenuItem_23
