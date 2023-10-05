import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { products } from '../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';




function ProductList() {
    const dispatch=useDispatch()
    const handleCart=(product)=>{
        dispatch(addToCart(product))
    }
  return (
    <>
    <Container>
    <Row className='d-flex justify-content-center'>
        {
            products?.length!==0 ?   
            products?.map((item,index)=>{
                return(
                    <Card style={{ width: '18rem' ,border:"1px solid"}} key={index} className='product'>
                    <Card.Body>
                      <Card.Title>{item?.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary" onClick={()=>handleCart(item)}>+Add to Card</Button>
                    </Card.Body>
                  </Card>
                )
            })
         :
         <>
          No Products Found 
          </>
        }
  

  </Row>
  </Container>
    </>
  

  )
}

export default ProductList