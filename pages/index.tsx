import React, { useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import blog from './blog'
import Login from './login';
import Link from 'next/link';
import { Typography } from '@mui/material';
// import MUIRichTextEditor from 'mui-rte'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import RichTextEditor from 'mui-rte';
import { convertToRaw } from 'draft-js'



    function HomePage() {
      const [content, setContent] = useState('');
      // const handleChange= (e: any) => {
      //   const {value} = e.target
      //   setContent(value)

      // }
      const onEditorChange = (event: any) => {
        const plainText = event.getCurrentContent().getPlainText() // for plain text
        const rteContent = convertToRaw(event.getCurrentContent())// for rte content with text formating
        rteContent && setContent(JSON.stringify(rteContent)) // store your rteContent to state
      }
      
      return (
        <>
      <Link href="/map"><Typography variant="h1">Login</Typography></Link>
     

<RichTextEditor />
</>
    
      )

    }

    
    export default HomePage
  
