import styled from 'styled-components';
import { contents } from '../../data/categories';
import Content from './Content';


const Container = styled.section`
  width: 100%;
  height: 70vh;
  margin: 100px 0;
`

function Categories() {
  return (
    <Container>
      <div className='categories-content'>
        {contents.map( content => (
          <Content content={content} key={content.id} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
