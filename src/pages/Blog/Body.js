import React from "react";

export default function Body(data) {
  console.log(data.data);
  return (
    <div>
      {data.data &&
        data.data.length &&
        data.data.map(item => {
          console.log(item);
          switch (item.__typename) {
            case "BodyTextRecord":
              return <div dangerouslySetInnerHTML={{ __html: item.body }} />;
            case "CodeBlockRecord":
              return (
                <div>
                  <pre>
                    <code
                      dangerouslySetInnerHTML={{ __html: item.codeBlock }}
                    />
                  </pre>
                </div>
              );
            default:
              return;
          }
        })}
    </div>
  );
}
