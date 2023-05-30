import React from 'react';
import axios from 'axios';
const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
}
export default function Resume() {
  return (
    <div>
      <h1 className="text-center" style={styles.h1} >Resume</h1>
      <p>
        <a href="https://drive.google.com/file/d/1Pq8EuNUu6ZhLpfmN-IU0XpYSX9Xy_ZSG/view?usp=sharing" download>
          Download Resume
        </a>
      </p>
    </div>
  );
}
// // import React from 'react';

// // export default function Resume() {
// //   const handleDownload = () => {
// //     // Replace 'path/to/pdf/file.pdf' with the actual path to your PDF file
// //     const fileUrl = 'https://drive.google.com/file/d/1Pq8EuNUu6ZhLpfmN-IU0XpYSX9Xy_ZSG/view?usp=sharing';

// //     // Create a temporary link element
// //     const link = document.createElement('a');
// //     link.href = fileUrl;
// //     link.target = '_blank'; // Open the PDF file in a new tab
// //     link.download = 'Sobolevskaya.pdf'; // Set the default file name

// //     // Trigger the download by programmatically clicking the link
// //     link.click();
// //   };

// //   return (
// //     <div>
// //       <h1>Download PDF</h1>
// //       <button onClick={handleDownload}>Download</button>
// //     </div>
// //   );
// // }

// //import React from 'react';

// // export default function DownloadPDF() {
// //   const handleDownload = () => {

// //     const fileUrl = '../../assets/ResumeSobolevskaya.pdf';

// //     // Create an anchor element
// //     const link = document.createElement('a');
// //     link.href = fileUrl;
// //     link.download = 'file.pdf'; // Specify the desired file name

// //     // Append the link to the document body
// //     document.body.appendChild(link);

// //     // Programmatically click the link to trigger the download
// //     link.click();

// //     // Remove the link from the document body after the download
// //     document.body.removeChild(link);
// //   };

// //   return (
// //     <div>
// //       <h1>Download PDF</h1>
// //       <button onClick={handleDownload}>Download</button>
// //     </div>
// //   );
// // }


// export default function DownloadPDF() {
//   const handleDownload = async () => {
//     try {
//       // Replace 'path/to/pdf/file.pdf' with the actual path to your PDF file
//       const fileUrl = 'https://drive.google.com/file/d/1Pq8EuNUu6ZhLpfmN-IU0XpYSX9Xy_ZSG/view?usp=sharing';

//       // Fetch the PDF file as a blob
//       const response = await axios.get(fileUrl, {
//         responseType: 'blob',
//       });
//       console.log(response);
//       const blobUrl = URL.createObjectURL(response.data);



//       // Create an anchor element
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = 'file.pdf'; // Specify the desired file name

//       // Programmatically click the link to trigger the download
//       link.click();

//       // Clean up the blob URL
//       URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error('Failed to download the PDF:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Download PDF</h1>
//       <button onClick={handleDownload}>Download</button>
//     </div>
//   );
// }
