import React from 'react'
import "./portfolio.css"
// import Work1 from "../../assets/work-1.svg"
// import Work2 from "../../assets/work-2.svg"
// import Work3 from "../../assets/work-3.svg"
// import Work4 from "../../assets/work-4.svg"
// import Work5 from "../../assets/work-5.svg"
// import Work6 from "../../assets/work-6.svg"
import Project from "../../assets/project.jpg"


const portfolio = () => {
  return (
    <section className='project container section' id='project'>
      <h2 className='section__title'> Projects</h2>
    {/* <h2 className='section__title'> Projects</h2>

   
<div className='container project__container'>
  <article className='project__item'>
      <div className='project__item-image'>
          <img src={Project} alt=""></img>
      </div>
       <h3> this is portfolio item title</h3>
       <a href='https://github.com/kuumaraswamy/kumar-portfolio.github.io' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
       <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>
  </article>
     
</div>

   <div className='container project__container' >
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Project} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Project} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Project} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Project} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
  </div>

  <div className='container project__container'>
  <article className='project__item'>
  <div className='project__item-image'>
      <img src={Project} alt=""></img>
  </div>
  <h3> this is portfolio item title</h3>
  <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'> Github </a>
  <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'> Demo </a>

  </article>
     
 </div>  */}

<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="https://github.com/kuumaraswamy">Read More</a>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

   
 </section>
  

  )
}

export default portfolio