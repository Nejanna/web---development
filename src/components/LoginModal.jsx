import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // імітація входу на сервер
  const Login = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    });
  };

  //відкриття і закриття вікна 
  const showModal = () => {
    setVisible(true);
  };

  const closingModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Увійти
      </Button>
      <Modal
        title="Форма авторизації"
        visible={visible}
        onCancel={closingModal}
        footer={[
          <Button key="back" onClick={closingModal}>
            Скасувати
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={Login}>
            Увійти
          </Button >,
        ]}
      >
        <Form>
          <Form.Item
            label="Логін"
            name="username"
            rules={[{ required: true, message: 'Будь ласка, введіть логін!' }]}hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Будь ласка, введіть пароль!' }]}hasFeedback
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginModal;
