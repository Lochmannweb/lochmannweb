'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormularData } from '../data/ContactFormular'

// const getClasses = (isMobile) => ({
//   title: {
//     fontSize: isMobile ? '40px' : '50px',
//     lineHeight: isMobile ? '3rem' : '5rem',
//     marginBottom: '20px',
//   },
//   container: {
//     gap: '8px',
//     padding: isMobile ? '0rem' : '5rem',
//     textAlign: 'center',
//     paddingTop: isMobile ? '5rem' : '10rem',
//   },
//   formContainer: {
//     padding: isMobile ? '2rem' : '3rem',
//     backdropFilter: 'blur(20px)',
//     borderColor: 'white',
//     borderWidth: 'thin',
//     borderRadius: '25px',
//     display: isMobile ? 'grid' : 'flex',
//     justifyContent: 'start',
//     gap: '5rem',
//   },
//   form: {
//     display: 'grid',
//     width: isMobile ? '1%' : '50%',
//   },
//   input: {
//     marginBottom: isMobile ? '20px' : '10px',
//     backgroundColor: '#000',
//     borderColor: 'grey', 
//     borderWidth: 'thin',
//     width: isMobile ? '16rem' : '35rem',
//   },
//   formTitle: {
//     fontSize: '13px',
//     marginLeft: '8px',
//   },
//   button: {
//     backgroundColor: '#000',
//     borderColor: 'grey', 
//     borderWidth: 'thin',
//     width: isMobile ? '40%' : '20%',
//     marginLeft: 'auto',
//     marginTop: '10px',
//   },
//   contactContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   contactSoMe: {
//     alignContent: 'center',
//     display: 'grid',
//     gap: '1rem',
//     paddingLeft: '3rem',
//   },
// });

function ContactForm() {

  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section>
      <h1 >{ContactFormularData.title}</h1>

      <div >
        <form onSubmit={handleSubmit} >
     
          <label htmlFor="fullname" >
            {ContactFormularData.fullname}
          </label>
          <input
            id="fullname"
            type="text" 
            name="text"
           
          />
          <ValidationError 
            prefix="text" 
            field="text"
            errors={state.errors}
          />
     
          <label htmlFor="phonenr">
            {ContactFormularData.phonenr}
          </label>
          <input
            id="phonenr"
            type="tel" 
            name="tel"
           
          />
          <ValidationError 
            prefix="tel" 
            field="tel"
            errors={state.errors}
          />
     
          <label htmlFor="email">
            {ContactFormularData.mailadress}
          </label>
          <input
            id="email"
            type="email" 
            name="email"
          
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
     
          <label htmlFor="message" >
            <p>{ContactFormularData.message}</p>
          </label>
          <textarea
            id="message"
            name="message"
         
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
     
          <button type="submit" disabled={state.submitting} >
            {ContactFormularData.button}
          </button>
        </form>
     
        <div >
          <div >
            <svg 
              version="1.0" 
              xmlns="http://www.w3.org/2000/svg" 
              width="25px" 
              height="25px" 
              viewBox="0 0 514 514" 
              preserveAspectRatio="xMidYMid meet">
                <g fill="#fff" stroke="#000000FF">
                <path d="M 96.500 2.082 C 92.965 2.599 87.008 4.668 82.000 7.119 C 73.863 11.101 72.325 12.458 45.976 38.889 C 15.721 69.239 12.473 73.486 7.003 89.852 C -8.004 134.752 15.364 212.306 67.310 290.000 C 126.171 378.037 208.809 448.566 300.500 489.021 C 345.186 508.738 390.631 516.880 417.323 509.954 C 436.662 504.935 442.210 500.977 472.504 470.587 C 500.062 442.941 505.649 436.003 509.090 425.150 C 511.733 416.816 511.998 404.682 509.704 397.000 C 506.004 384.608 502.670 380.613 462.031 339.876 C 424.145 301.900 423.354 301.181 414.804 296.990 C 406.901 293.115 405.249 292.682 396.664 292.233 C 385.075 291.627 376.632 293.853 367.065 300.037 C 363.430 302.386 351.540 313.201 339.275 325.315 L 317.837 346.488 308.168 341.497 C 258.069 315.637 191.015 247.704 169.982 201.500 L 167.251 195.500 189.417 173.000 C 201.609 160.625 213.026 148.214 214.788 145.419 C 224.678 129.734 225.011 111.833 215.724 95.000 C 211.390 87.143 136.810 12.552 129.000 8.262 C 118.502 2.496 107.709 0.444 96.500 2.082 M 114.554 29.467 C 118.244 31.307 128.792 41.275 156.087 68.717 C 195.357 108.197 197.000 110.248 197.000 119.793 C 197.000 129.087 193.889 133.288 167.963 159.000 C 154.931 171.925 143.478 184.046 142.512 185.936 C 139.332 192.159 140.766 199.618 147.898 213.958 C 175.849 270.155 241.803 336.128 300.283 366.386 C 311.509 372.194 313.739 373.000 318.583 373.000 C 321.693 373.000 325.495 372.292 327.300 371.376 C 329.060 370.483 341.300 359.093 354.500 346.066 C 381.035 319.878 384.339 317.498 394.000 317.619 C 397.620 317.665 401.038 318.465 404.000 319.961 C 407.046 321.499 420.191 333.905 444.695 358.367 C 484.326 397.930 485.970 400.013 485.990 410.663 C 486.008 420.058 482.291 425.130 455.500 452.265 C 441.443 466.503 429.512 477.727 426.702 479.358 C 414.879 486.216 400.629 488.771 384.005 487.013 C 342.994 482.679 294.757 462.730 240.500 427.666 C 181.078 389.264 125.754 333.431 84.766 270.500 C 58.617 230.352 40.212 189.561 31.298 152.000 C 28.843 141.654 28.568 138.644 28.556 122.000 C 28.544 104.238 28.651 103.230 31.238 96.720 C 32.720 92.991 35.500 87.591 37.415 84.720 C 42.953 76.418 88.622 31.511 94.000 29.079 C 100.390 26.189 108.280 26.338 114.554 29.467 "/></g>
            </svg>
            <p>{ContactFormularData.mynr}</p>
          </div>
      
          <div >
            <svg 
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg" 
            width="25px" 
            height="25px"
            viewBox="0 0 514 514"
            preserveAspectRatio="xMidYMid meet">
              <g fill="#fff" stroke="#000000FF">
              <path d="M 16.493 89.351 C 11.023 91.898 5.667 97.338 3.125 102.927 C 1.648 106.174 1.500 120.213 1.500 257.000 C 1.500 393.787 1.648 407.826 3.125 411.073 C 5.667 416.662 11.023 422.102 16.493 424.649 L 21.500 426.980 257.000 426.980 L 492.500 426.980 497.507 424.649 C 502.977 422.102 508.333 416.662 510.875 411.073 C 512.352 407.826 512.500 393.787 512.500 257.000 C 512.500 120.213 512.352 106.174 510.875 102.927 C 508.333 97.338 502.977 91.898 497.507 89.351 L 492.500 87.020 257.000 87.020 L 21.500 87.020 16.493 89.351 M 127.182 197.636 C 186.189 241.896 235.829 278.434 238.927 279.886 C 244.005 282.268 245.610 282.500 257.000 282.500 C 268.157 282.500 270.091 282.234 275.000 280.022 C 278.272 278.548 323.438 245.331 386.500 198.022 C 444.800 154.285 492.838 118.350 493.250 118.167 C 493.663 117.983 494.000 179.997 494.000 255.976 C 494.000 340.942 493.642 393.897 493.069 393.543 C 492.558 393.227 467.585 362.635 437.575 325.561 C 407.565 288.487 381.823 257.220 380.371 256.077 C 372.277 249.710 361.779 260.445 367.708 269.027 C 368.647 270.387 394.072 301.964 424.208 339.197 C 454.344 376.430 479.000 407.143 479.000 407.447 C 479.000 407.751 379.100 408.000 257.000 408.000 C 134.900 408.000 35.000 407.762 35.000 407.471 C 35.000 407.181 58.768 377.593 87.818 341.721 C 116.868 305.850 142.293 274.328 144.318 271.673 C 149.049 265.472 149.273 261.119 145.077 256.923 C 141.561 253.407 137.415 253.099 133.633 256.074 C 132.182 257.215 106.473 288.463 76.500 325.514 C 46.527 362.565 21.553 393.158 21.002 393.499 C 20.335 393.911 20.000 348.000 20.000 256.059 C 20.000 180.127 20.227 118.000 20.505 118.000 C 20.783 118.000 68.787 153.836 127.182 197.636 M 374.491 183.382 C 318.106 225.668 270.193 261.145 268.019 262.221 C 262.678 264.863 251.409 264.914 246.217 262.318 C 243.643 261.031 42.806 111.256 37.081 106.354 C 36.851 106.157 135.740 106.109 256.836 106.248 L 477.010 106.500 374.491 183.382 "/></g>
            </svg>
            <p>{ContactFormularData.mymail}</p>
          </div>
      
          <div>
            <svg 
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg"
            width="25px" 
            height="25px" 
            viewBox="0 0 514 514" 
            preserveAspectRatio="xMidYMid meet">
              <g fill="#fff" stroke="#000000FF">
              <path d="M 245.000 2.094 C 175.059 6.318 113.314 52.552 88.551 119.240 C 82.282 136.124 79.359 150.290 78.077 170.000 C 76.032 201.420 82.662 233.930 96.787 261.754 C 99.929 267.943 135.350 325.908 175.500 390.563 C 232.362 482.131 249.222 508.568 251.765 510.150 C 255.988 512.778 262.669 512.890 266.941 510.406 C 269.628 508.843 282.708 487.660 339.601 392.729 C 377.762 329.055 410.979 273.444 413.416 269.148 C 435.698 229.879 442.103 181.258 430.891 136.500 C 420.248 94.017 391.851 54.646 354.361 30.396 C 321.677 9.255 284.733 -0.306 245.000 2.094 M 270.575 31.415 C 294.104 32.858 322.539 43.248 342.979 57.871 C 378.137 83.025 399.988 118.797 406.049 161.122 C 407.625 172.128 406.738 200.633 404.496 211.000 C 402.123 221.978 396.381 238.284 391.469 248.000 C 386.336 258.151 260.421 468.380 259.287 468.692 C 258.221 468.984 127.623 258.144 122.188 247.357 C 113.846 230.797 108.496 211.114 107.148 192.030 C 105.163 163.910 110.769 136.675 123.640 111.903 C 147.613 65.762 194.746 34.644 246.000 31.118 C 251.775 30.721 257.850 30.514 259.500 30.658 C 261.150 30.802 266.134 31.143 270.575 31.415 "/></g>
              <g fill="#fff" stroke="#000000FF">
              <path d="M 247.867 92.097 C 214.738 95.516 187.146 116.276 174.024 147.653 C 165.554 167.906 165.739 194.914 174.487 215.319 C 179.350 226.663 183.606 233.295 191.405 241.689 C 208.963 260.586 230.933 270.114 257.000 270.137 C 281.241 270.158 301.456 262.126 318.864 245.557 C 336.431 228.838 346.235 205.860 346.195 181.500 C 346.154 156.312 337.562 135.386 320.088 117.912 C 300.840 98.663 274.716 89.325 247.867 92.097 M 270.500 122.164 C 273.250 122.736 279.280 125.004 283.899 127.203 C 295.500 132.726 304.940 142.165 310.699 154.000 C 315.551 163.972 317.000 170.181 317.000 181.000 C 317.000 197.832 311.265 211.853 299.649 223.415 C 287.641 235.368 273.748 241.143 257.000 241.143 C 240.288 241.143 226.320 235.352 214.484 223.516 C 202.648 211.680 196.857 197.712 196.857 181.000 C 196.857 164.288 202.648 150.320 214.484 138.484 C 229.551 123.418 249.127 117.714 270.500 122.164 "/></g>
            </svg>
            <p>{ContactFormularData.city}</p>
          </div>
      
          <div >
            <svg 
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg" 
            width="25px" 
            height="25px" 
            viewBox="0 0 514 514" 
            preserveAspectRatio="xMidYMid meet">
              <g fill="#fff" stroke="#000000FF">
              <path d="M 132.749 24.114 C 111.001 26.211 88.469 35.120 71.000 48.530 C 62.798 54.826 49.124 69.503 43.562 77.979 C 34.357 92.010 27.776 108.939 24.732 126.423 C 22.956 136.623 22.956 377.377 24.732 387.577 C 27.747 404.891 34.591 422.346 44.111 437.000 C 50.459 446.770 69.804 465.433 80.227 471.842 C 97.696 482.583 114.983 488.232 135.945 490.048 C 153.421 491.563 381.225 490.761 389.111 489.157 C 417.000 483.485 438.064 472.089 456.687 452.597 C 476.713 431.637 487.343 408.057 490.037 378.614 C 491.577 361.789 490.786 132.851 489.161 124.889 C 487.119 114.887 483.002 101.874 479.440 94.163 C 471.873 77.785 456.266 58.422 442.000 47.710 C 424.234 34.372 402.656 26.196 379.500 24.030 C 366.196 22.786 145.746 22.861 132.749 24.114 M 389.500 44.894 C 409.852 49.116 426.065 57.932 441.066 72.934 C 456.068 87.935 464.884 104.148 469.106 124.500 C 470.871 133.004 470.974 140.305 470.974 257.000 C 470.974 373.695 470.871 380.996 469.106 389.500 C 464.884 409.852 456.068 426.065 441.066 441.066 C 426.065 456.068 409.852 464.884 389.500 469.106 C 380.996 470.871 373.695 470.974 257.000 470.974 C 140.305 470.974 133.004 470.871 124.500 469.106 C 104.148 464.884 87.935 456.068 72.934 441.066 C 57.932 426.065 49.116 409.852 44.894 389.500 C 43.129 380.996 43.026 373.695 43.026 257.000 C 43.026 140.305 43.129 133.004 44.894 124.500 C 49.116 104.148 57.932 87.935 72.934 72.934 C 87.765 58.103 104.019 49.195 124.000 44.948 C 131.927 43.262 140.852 43.137 256.500 43.083 C 373.810 43.029 380.986 43.127 389.500 44.894 "/></g>
              <g fill="#fff" stroke="#000000FF">
              <path d="M 243.286 142.034 C 215.972 145.462 192.546 157.261 173.345 177.261 C 164.346 186.634 158.959 194.146 153.604 204.789 C 114.968 281.567 170.496 372.000 256.276 372.000 C 271.416 372.000 282.735 370.138 295.649 365.522 C 331.486 352.714 358.845 322.549 368.682 285.000 C 371.777 273.186 372.853 253.260 371.059 240.990 C 363.886 191.933 326.609 152.673 278.454 143.460 C 268.732 141.600 252.114 140.926 243.286 142.034 M 275.792 162.588 C 311.751 169.998 340.343 197.382 350.202 233.854 C 353.277 245.231 353.273 267.185 350.194 279.440 C 342.199 311.255 318.584 337.243 288.262 347.591 C 275.202 352.049 265.946 353.356 252.000 352.712 C 237.455 352.040 227.369 349.441 214.292 342.995 C 170.999 321.654 150.469 273.142 165.204 227.000 C 175.319 195.325 203.741 169.682 236.516 162.659 C 246.017 160.624 266.082 160.587 275.792 162.588 "/></g>
              <g fill="#fff" stroke="#000000FF">
              <path d="M 386.132 88.078 C 376.027 90.063 366.141 98.042 361.715 107.783 C 358.398 115.082 358.672 127.626 362.311 135.143 C 365.335 141.388 371.502 147.631 378.151 151.179 C 381.868 153.163 383.954 153.500 392.500 153.499 C 401.396 153.499 403.056 153.205 407.540 150.839 C 410.312 149.376 414.515 146.080 416.879 143.515 C 434.227 124.695 425.380 94.921 400.540 88.533 C 394.005 86.852 392.594 86.808 386.132 88.078 M 401.404 110.050 C 407.429 115.340 408.484 123.573 403.885 129.419 C 395.934 139.528 380.405 135.233 378.488 122.395 C 376.705 110.451 392.295 102.052 401.404 110.050 "/></g>
            </svg>
            <p>{ContactFormularData.IG}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
