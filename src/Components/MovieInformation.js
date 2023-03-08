import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const MovieInformation = (props) => {
  const [show, setShow] = useState(false);
  // console.log(props.movieData);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const movieData = props.movieData
  return (
    <>
     {/* {movieData.map((curMovie) => {}
  //     console.log(curMovie)
  //     const {Poster,Title,Type,Year,imdbID} = curMovie
  //     console.log(Poster)
  //   })} */}
      <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     

    </>
  );
}

export default MovieInformation;