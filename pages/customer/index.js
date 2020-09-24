
import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReadAPI from './api/ReadAPI'
import WriteAPI from './api/WriteAPI'
import Page from '../../template/Page'
// layout for this page

import Admin from "../../template/Admin";


function Customer() {

    return (
      <div>
        <p>Customer List</p>
      </div>
    )
  
}

Customer.layout = Admin;

export default Customer;