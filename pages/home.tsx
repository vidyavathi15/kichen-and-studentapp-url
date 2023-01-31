import React, { useRef , useState} from "react";
import JoditEditor from "jodit-react";

const config = {
 buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};


const TextEditor = () => {
  const editor = useRef(null);
  const [initialValue, setValue] = useState("")
  const getValue= (e:any) => {
    setValue(e.target.value)
  }

  return (
    <JoditEditor
      ref={editor}
     value={initialValue}
      config={config}
      
      //   onBlur={(newContent) => getValue(newContent)}
     onChange={(newContent) => getValue(newContent)}
   />
  );
};

export default TextEditor;