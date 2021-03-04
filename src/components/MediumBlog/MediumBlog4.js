import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Nabvar/Navbar";
import "./MediumBlog4.css";

const MediumBlog4 = () => {
  return (
    <div>
      <Navbar />
      <div className="medium-blog mx-5">
        <div style={{ padding: "20px" }}>
          <h1 className="text-center font-weight-bold">
            A re-introduction to JavaScript
          </h1>
        </div>
        <div>
          <p>
            JavaScript is a multi-paradigm, dynamics language with types and
            operators, standard built in objects and methods. JavaScript types
            are{" "}
            <span className="font-weight-bold">
              Number, String, Boolean, Function, Object, Symbol
            </span>
            .
          </p>
          <br />
          <p>
            You can convert a string to an integer using the built in parseInt()
            function. To find length of a string, access its length property.
            JavaScript variables are declared with three special keywords: let,
            const or var. The double equals operators performs type coercion and
            triple equals do not check type coercion. JavaScript objects can be
            thought of as simple collections of named-value pairs. Object
            literal syntax can be used to initialize an object in its entirety:
          </p>
          <br />
          <code className="code-style">
            {`
                const person = {
                    firstName: "John",
                    lastName: "Doe",
                    age: 50,
                    eyeColor: "blue"
                  };
                `}
          </code>
          <p className="mt-5">
            We can access firstName of person object in two ways:
            <span className="font-weight-bold">person.firstName</span> and{" "}
            <span className="font-weight-bold">person[“firstName”]</span>.
            JavaScript functions is a block of code designed to perform a
            particular task. JS function is defined with the function keyword,
            followed by a name, followed by parenthesis (). Function parameters
            are listed inside the parenthesis () in the function definition.
            Function <span className="font-weight-bold">arguments</span> are the
            values received by the function when it is invoked.
          </p>
          <pre className="code-style">
            {`function add(x, y){
int result = x + y;
return result;
}
const result = add(4,7);
console.log(result)//output: 11`}
          </pre>
          <h1 className="text-center font-weight-bold my-5">
            JavaScript String You Should To Know
          </h1>
          <p>
            The String object is used to represent and manipulate a sequence of
            characters. String value are hold in double quotation mark “ ”.
          </p>
          <p>
            String operates various types of methods. Some efficient methods are
            described below:
          </p>
          <p>
            <span className="font-weight-bold">charAt()</span>: The{" "}
            <span className="font-weight-bold">charAt()</span> method returns
            the character at the specified index in a string.
          </p>
          <pre className="code-style">
            {`const str = "HELLO Sharif";
const result = str.charAt(1);// output: E`}
          </pre>
          <p>
            <span className="font-weight-bold">concat()</span>: The{" "}
            <span className="font-weight-bold">concat()</span> method is used to
            join two or more strings. It does not change the existing strings
            but returns a new string containing the joined strings.
          </p>
          <pre className="code-style">
            {`
              const firstName  = "Sharif";
              const lastName = " Hossain";
              const result = firstName.concat(lastName);
              // output:Sharif Hossain
              `}
          </pre>
        </div>
        <div className="text-center p-2">
            <Link to="/home">
              <a>See more Articles</a>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default MediumBlog4;
