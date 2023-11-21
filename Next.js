Next js-Nextjs is a react based framework. It is famous for server side rendering. Next.js is built by Zeit.

1-Componets
a-client component-It renders on browser. Render on the client side. if we want to use event and states, hooks then we use a "use client directive". All UI-relaated code and events should be written here. We can use both components in single component . ex-buttons
b-server component-it provides server side rendering. By default , all components are server components. They are closer to the backend. All task related to the backend ie: API, data fetch created by server component.  ex- navbar, sidebar

2-routing - 
*file basic routing make new page-page.js should be present in present folder. no package required for the routing in next.js. It uses file system based router.
src/login/page.js

3-link/navigation-
Link- <Link href='/login'>Go ti the login page</Link>

Button-  import {useRouter} from 'next/navigation'
const router =useRouter();
const navigate=(name)=>{
	router.push(name)
}
<button onClick={()=>navigate('/login')}>Go to login page </button>   ----->use client

4-nested routing-in this we have page inside page
about
	->aboutcollege
	->aboutcollege
file structure-src/about/aboutcollege/page.js

5- 404 page not found- the page whose is not available in the folder or website.
for-global 404 page- we create not-found.js file in app folder
for specific url- [...not-found] in app folder choose any folder 

7-common layout-
in this we have already layout.js file.  it provide common area to his children component. It is a root layout. if we create layout.js file in login folder then it will show every file of login folder.
login
	->loginstudent
	->loginteacher
	layout.js
in layout.js file-
export default function Layout({
	children
}){
	return(
		<div>hii this is layout folder of login</div>
		{children}
	)
}

8-conditional layout---->[student]
if we doesn't want to use common layout then we use conditional layout.

9-dynamic routing- [student]
sstudentlist
	->[student]
	  	page.js
	page.js

10-catch-all segments----> [...lectures]
study
	->[...lecture]
	  	page.js
	page.js

11-middleware---->Middleware needs to return a response in less than 1.5 seconds, otherwise the request will time out. Middleware should be used in cases where a small amount of processing is required.
It is that core that is execute before routing request. In this we can check authentication.
12-rendering-to convert the javascript code into the HTML. 
a-client side rendering-React.js
b-pre-rendering(server side rendering)-Next.js
13-SEO-Search engin optimization
it helps show websites in search engine.
14-fetch api data in client component-
https://dummyjson.com/products

import { useEffect, useState } from "react"
export default function Page(){
    const [product, setProduct]=useState([]);
    useEffect(async ()=>{
        let data=await fetch("https://dummyjson.com/products");
        data=await data.json();
        console.log(data);
        setProduct(data.products)
    },[])
    return(
        <div>
        <h1>Product list</h1>
        {
            product.map((item)=>(
                <div>
                <h3>Name : {item.title}, price ; {item.price}</h3>
                <h3>Description : {item.description}</h3>                
                </div>
            ))
        }
        </div>
    )
}

15-call api in server component-
async function productlist(){
    let data=await fetch("https://dummyjson.com/products");
    data=await data.json();
    return data.products;
}

export default async function Page(){
    let products=await productlist();
    console.log(products);
    return(
        <div>
            <h1>Product page</h1>
            {
                products.map((item)=>(
                    <div><h3>Name: {item.title}</h3></div>
                ))
            }
        </div>
    )
}


16- client component with server component-
we can't perform events, hooks, useState, useEffect in server side components.
componets render on server side and events works on browser side 

17-Style with CSS in next.js-

"use client"
import {useState} from "react";
export default function Page(){
	const [h3Style, setH3Style]=useState({backgroundColor:'green'})
	return(
		<div>
			<h3 style={h3Style} > Heading 3 for user</h3>
	<button onClick={()=>setH3Style({backgroundColor:'red'})}>Update Style</button>
		</div>
	)
}

18-style with module-
a-we create custom.module.css file
b-import this file on your page file-import custom from './custom.module.css'
c-change the className with - className={custom.main}

import custom from './custom.module.css'
import outside from '@/style/outside.module.css'

19-image optimization-
image component
a-in this we use Image tag to import the image.
**********import Image from "next/image";
import Profile from "../../public/vercel.svg";**********
<Image src={Profile} height={500} width={500} />

if we want to import image url-

a:-
<Image
src="https://........................."
width={100}
heigth={100}
/>

b:-go to next.config.js file and change
const nextConfig = {
    images:{
        domains:["images.unsplash.com"]
    }
}
----and in page.js file 
 <Image src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" height={500} width={500} />

20-Api routes-

import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name:"Arpit",age:28,city:'noida'},{status:200})
}
      
21-GET API with Static Data-
1-get-when we directly fetch the  data through API
2-post-when we store the data  in the database
3-put-when we want to update the data.
4-delete-whenwe delete the data

22-next.js vs react.js

1-react is a js library
a-client side rendering of UI element
b-need to add routing and other package
c-it already said-use next.js
d-easy and less concept for learning just basic knowledge of js
e-good for small scale app and use for client side rendering

1-next is a react framework
a-server side rendering of UI element
b-many packages are already added in framework
c-it provides routing, server side rendering, and Middleware.
d-need react and js knowledge 
e-good for big app and help in SEO(search engin optimization) too as provide server side rendering.


interview question-
why ue next.js-more features than react. write code for backend code also. Use for server side rendering. It is a full stack framework. Any database that we we can connect node.js

server components - A component that executes on the server side. This is faster and good for SEO also.

client component -A component that executes on the client side. Client side means, code will execute on browser.

Features-
routing
middleware
server components
image optimization
backend part

routing type-
file system-based routing
need to make a new folder and file for new page.
this features in next.js 13 version

can we use Redux in next.js-yes

default component-server component

how to make client component-
"use client" directive at the top on component

can we use event in server components -
no, we can use events in client component 

Middleware-it allows you to run code before a request is completed
ie-conditional redirection

environment variables use-put sensitive data ie-DB username and password

server components  better for SEO-it can read page content from server rendering
