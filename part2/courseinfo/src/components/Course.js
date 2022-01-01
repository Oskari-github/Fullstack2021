import React from 'react'

const Course = ({course}) => {
    return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
    )
}

const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
}

const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => 
          <Part key={part.id} part={part} />)}
      </>
    )
}

const Total = ({parts}) => {
    return (
      <>
        <p>
          Number of exercises {parts.reduce((summa, part) => summa + part.exercises, 0)}
        </p>
      </>
    )
}

const Part = (props) => {
    return (
      <>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </>
    )
}


export default Course