import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form className="m-3 col-8 col-sm-3 col-xl-2">
        <FormGroup>
          <Label for="name">Tên</Label>
          <Input type="text" name="name" id="name" placeholder="Nhập tên" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Số điện thoại</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Nhập số điện thoại"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="newEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="newEmail"
            placeholder="abc@xxx.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPw1">Mật khẩu</Label>
          <Input
            type="password"
            name="newPw1"
            id="pw1"
            placeholder="Nhập mật khẩu"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPw2">Nhập lại mật khẩu</Label>
          <Input
            type="password"
            name="newPw2"
            id="pw2"
            placeholder="Nhập lại mật khẩu"
            required
          />
        </FormGroup>
        <Button>Đăng kí</Button>
      </Form>
    );
  }
}
