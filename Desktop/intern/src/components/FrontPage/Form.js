import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ClientForm() {
  return (
<>
<h1 className="text-center">Want to Work with Us</h1>
<p>Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui minima consectetur distinctio laborum provident 
quidem similique reiciendis officia explicabo veritatis, mollitia numquam officiis consequatur ex quo, enim dolore. Quae! adipisicing elit. Officiis, nemo
 voluptatum, fuga delectus velit vitae possimus quae recusandae consequuntur adipisci quibusdam, praesentium natus corrupti facere!</p>

    <div className="d-flex vh-40">
         <div className="m-auto p-3 rounded" style={{ width: "600px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Contact" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "purple" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}
