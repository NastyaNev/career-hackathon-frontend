import React from 'react';
import { Outlet } from "react-router";

// Отклики

function Applications() {

  return (
    <>
      <p>Привет, я страница с откликами</p>
      <Outlet />
    </>
  );
}

export default Applications;
