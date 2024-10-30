"use client"

import { StepByStep } from "@/app/data/MyWorkData"
import React, { useEffect, useState } from 'react'

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'grid',
    margin: isMobile ? '1rem' : isTablet ? '1rem' : '',
    gridTemplateColumns: isMobile ? 'none' : isTablet ? 'none' : '1fr 1fr',
    textAlign: 'center',
    marginTop: isMobile ? '5rem' : isTablet ? '1rem' : '1rem',
    gap: isMobile ? '1rem' : isTablet ? '1rem' : '1rem',
    paddingLeft: isMobile ? '0rem' : isTablet ? '6rem' : '0rem',
    paddingRight: isMobile ? '0rem' : isTablet ? '6rem' : '0rem',
  }),
  StepByStep: (isMobile, isTablet) => ({
    display: isMobile ? 'flex' : isTablet ? 'flex' : 'flex',
    gap: isMobile ? '1.5rem' : isTablet ? '1.5rem' : '2rem',
    justifyContent: isMobile ? 'start' : isTablet ? 'start' : 'start',
    borderRadius: '50px',
    borderWidth: 'thin',
    padding: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    paddingTop: isMobile ? '2rem' : isTablet ? '2rem' : '2rem',
    paddingBottom: isMobile ? '2rem' : isTablet ? '2rem' : '2rem',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    backdropFilter: 'blur(20px)',
    alignItems: 'center',
  }),
  StepByStepTitle: (isMobile, isTablet) => ({
    fontSize: isMobile ? '20px' : isTablet ? '25px' : '35px',
    // borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
    // borderRadius: '25px',
    // borderWidth: 'thin',
    fontFamily: 'fantasy',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    margin: isMobile ? '1rem' : isTablet ? '1rem' : '',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '15px' : '25px',
    fontFamily: 'emoji',
  }),
  content: (isMobile, isTablet) => ({
    fontSize: isMobile ? '13px' : isTablet ? '' : '15px',
  }),
  icon: {
    color: 'white',
    margin: 'auto',
  },
  ProcesTitle: (isMobile, isTablet) => ({
    fontSize: isMobile ? '' : isTablet ? '' : '30px',
    borderRadius: '50px',
    borderWidth: 'thin',
    padding: '1rem',
    margin: '1rem',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
  }),
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: (isMobile, isTablet) => ({
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    width: isMobile ? '35%' : isTablet ? '25%' : '15%',
    padding: '0.3rem',
    marginTop: isMobile ? '0.3rem' : isTablet ? '' : '2rem',
    marginBottom: isMobile ? '3rem' : isTablet ? '' : '5rem',
  }),
};

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 1024);
    };
    
    handleResize(); // set Initial value
    window.addEventListener("resize", handleResize);
  
  return () => {
    window.removeEventListener("resize", handleResize)
  }

 }, []);

  return (
    <>
    <h1 style={styles.StepByStepTitle(isMobile, isTablet)}>{StepByStep.title}</h1>
    <div style={styles.container(isMobile, isTablet)}>
        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                <svg 
                    version="1.0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30px" 
                    height="30px" 
                    viewBox="0 0 514 514" 
                    style={styles.icon}
                    preserveAspectRatio="xMidYMid meet">
                        <g fill="#fff" stroke="#000000FF">
                            <path d="M 96.500 2.082 C 92.965 2.599 87.008 4.668 82.000 7.119 C 73.863 11.101 72.325 12.458 45.976 38.889 C 15.721 69.239 12.473 73.486 7.003 89.852 C -8.004 134.752 15.364 212.306 67.310 290.000 C 126.171 378.037 208.809 448.566 300.500 489.021 C 345.186 508.738 390.631 516.880 417.323 509.954 C 436.662 504.935 442.210 500.977 472.504 470.587 C 500.062 442.941 505.649 436.003 509.090 425.150 C 511.733 416.816 511.998 404.682 509.704 397.000 C 506.004 384.608 502.670 380.613 462.031 339.876 C 424.145 301.900 423.354 301.181 414.804 296.990 C 406.901 293.115 405.249 292.682 396.664 292.233 C 385.075 291.627 376.632 293.853 367.065 300.037 C 363.430 302.386 351.540 313.201 339.275 325.315 L 317.837 346.488 308.168 341.497 C 258.069 315.637 191.015 247.704 169.982 201.500 L 167.251 195.500 189.417 173.000 C 201.609 160.625 213.026 148.214 214.788 145.419 C 224.678 129.734 225.011 111.833 215.724 95.000 C 211.390 87.143 136.810 12.552 129.000 8.262 C 118.502 2.496 107.709 0.444 96.500 2.082 M 114.554 29.467 C 118.244 31.307 128.792 41.275 156.087 68.717 C 195.357 108.197 197.000 110.248 197.000 119.793 C 197.000 129.087 193.889 133.288 167.963 159.000 C 154.931 171.925 143.478 184.046 142.512 185.936 C 139.332 192.159 140.766 199.618 147.898 213.958 C 175.849 270.155 241.803 336.128 300.283 366.386 C 311.509 372.194 313.739 373.000 318.583 373.000 C 321.693 373.000 325.495 372.292 327.300 371.376 C 329.060 370.483 341.300 359.093 354.500 346.066 C 381.035 319.878 384.339 317.498 394.000 317.619 C 397.620 317.665 401.038 318.465 404.000 319.961 C 407.046 321.499 420.191 333.905 444.695 358.367 C 484.326 397.930 485.970 400.013 485.990 410.663 C 486.008 420.058 482.291 425.130 455.500 452.265 C 441.443 466.503 429.512 477.727 426.702 479.358 C 414.879 486.216 400.629 488.771 384.005 487.013 C 342.994 482.679 294.757 462.730 240.500 427.666 C 181.078 389.264 125.754 333.431 84.766 270.500 C 58.617 230.352 40.212 189.561 31.298 152.000 C 28.843 141.654 28.568 138.644 28.556 122.000 C 28.544 104.238 28.651 103.230 31.238 96.720 C 32.720 92.991 35.500 87.591 37.415 84.720 C 42.953 76.418 88.622 31.511 94.000 29.079 C 100.390 26.189 108.280 26.338 114.554 29.467 "/></g>
                </svg>
            </div>
            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.contact.title}</h1>
            </div>
            {/* <h2 style={styles.content(isMobile, isTablet)}>{StepByStep.contact.content}</h2> */}
        </div>

        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                <svg 
                    version="1.0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30px"
                    height="30px" 
                    viewBox="0 0 514 514" 
                    style={styles.icon}
                    preserveAspectRatio="xMidYMid meet">
                        <g fill="#fff" stroke="#000000FF">
                            <path d="M 387.500 17.559 C 386.400 17.812 383.025 18.504 380.000 19.095 C 376.975 19.687 370.675 21.976 366.000 24.182 L 357.500 28.193 215.408 170.347 L 73.316 312.500 45.053 397.929 C 18.229 479.010 16.848 483.549 17.913 487.105 C 19.507 492.423 24.097 496.000 29.327 496.000 C 32.121 496.000 61.422 486.713 118.000 467.895 L 202.500 439.790 343.024 299.145 C 490.989 151.054 487.100 155.178 492.849 140.242 C 495.228 134.063 495.444 132.248 495.444 118.500 C 495.444 104.752 495.228 102.937 492.849 96.758 C 491.422 93.051 488.735 87.433 486.877 84.276 C 482.999 77.682 444.963 38.432 435.500 31.259 C 428.660 26.074 419.460 21.480 411.768 19.411 C 406.269 17.932 390.956 16.763 387.500 17.559 M 380.746 133.246 C 405.636 158.131 426.000 178.944 426.000 179.498 C 426.000 180.051 374.250 232.252 311.000 295.500 L 196.000 410.497 149.751 364.249 L 103.503 318.000 218.500 203.000 C 281.748 139.750 333.946 88.000 334.494 88.000 C 335.043 88.000 355.856 108.361 380.746 133.246 M 412.277 46.821 C 417.462 49.378 422.347 53.775 441.575 73.195 C 466.228 98.093 468.133 100.685 470.287 112.270 C 471.673 119.723 470.215 128.997 466.444 136.704 C 464.763 140.141 460.211 145.882 454.423 151.867 L 445.108 161.500 398.816 115.261 L 352.525 69.022 360.512 60.930 C 375.015 46.236 382.398 42.709 397.277 43.365 C 404.576 43.687 407.102 44.269 412.277 46.821 M 111.937 442.855 C 78.767 453.914 51.440 462.773 51.210 462.543 C 50.833 462.166 89.583 344.700 90.766 342.633 C 91.039 342.156 109.484 359.987 131.754 382.258 L 172.246 422.749 111.937 442.855 "/></g>
                </svg>
            </div>

            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.tilbudKontrakt.title}</h1>
            </div>
        </div>

        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                <svg 
                   version="1.0" 
                   xmlns="http://www.w3.org/2000/svg" 
                   width="30px" 
                   height="30px" 
                   viewBox="0 0 514 514" 
                   style={styles.icon}
                   preserveAspectRatio="xMidYMid meet">
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 308.000 194.372 C 296.567 196.953 287.543 204.122 282.308 214.782 L 279.500 220.500 279.500 337.000 L 279.500 453.500 282.308 459.218 C 287.841 470.486 297.702 477.855 310.111 479.995 C 314.517 480.755 342.434 481.004 400.053 480.799 L 483.606 480.500 491.238 476.728 C 503.234 470.798 510.125 461.506 512.131 448.556 C 512.686 444.973 512.953 397.572 512.784 332.500 C 512.506 224.958 512.455 222.396 510.495 217.824 C 505.974 207.283 498.717 200.026 488.176 195.505 C 483.630 193.556 481.134 193.495 398.500 193.315 C 333.856 193.174 312.183 193.427 308.000 194.372 M 479.800 226.200 C 480.702 227.102 481.000 240.054 481.000 278.341 L 481.000 329.282 476.947 324.678 C 465.622 311.811 443.179 309.134 427.921 318.829 C 425.009 320.680 418.719 327.392 410.635 337.276 C 398.933 351.585 396.516 354.000 393.904 354.000 C 393.391 354.000 388.847 350.142 383.806 345.426 C 378.765 340.710 372.556 335.795 370.007 334.504 C 359.576 329.218 346.351 329.255 335.806 334.599 C 333.154 335.942 326.263 341.589 320.493 347.147 L 310.000 357.254 310.000 292.698 C 310.000 235.345 310.175 227.968 311.571 226.571 C 312.975 225.168 321.997 225.000 395.871 225.000 C 458.883 225.000 478.886 225.286 479.800 226.200 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 31.732 2.030 C 24.684 3.227 18.135 6.766 12.451 12.451 C 1.858 23.043 0.669 29.125 1.240 69.815 C 1.588 94.641 1.935 100.237 3.359 104.000 C 7.149 114.010 16.472 123.166 26.500 126.725 C 31.232 128.405 43.581 128.500 257.000 128.500 C 470.419 128.500 482.768 128.405 487.500 126.725 C 497.797 123.070 507.070 113.797 510.725 103.500 C 512.290 99.091 512.500 94.539 512.500 65.000 C 512.500 35.461 512.290 30.909 510.725 26.500 C 507.183 16.521 498.163 7.305 488.000 3.282 C 483.735 1.593 471.826 1.493 260.000 1.360 C 137.075 1.283 34.354 1.584 31.732 2.030 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 12.315 450.093 C 7.925 451.376 3.258 456.327 1.986 461.053 C -0.150 468.986 4.863 477.757 12.791 479.959 C 18.255 481.476 219.556 481.384 224.101 479.861 C 236.904 475.573 238.887 459.899 227.677 451.592 C 224.858 449.503 224.691 449.500 120.177 449.331 C 57.987 449.231 14.207 449.540 12.315 450.093 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 12.315 386.093 C 7.925 387.376 3.258 392.327 1.986 397.053 C -0.150 404.986 4.863 413.757 12.791 415.959 C 18.255 417.476 219.556 417.384 224.101 415.861 C 236.904 411.573 238.887 395.899 227.677 387.592 C 224.858 385.503 224.691 385.500 120.177 385.331 C 57.987 385.231 14.207 385.540 12.315 386.093 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 12.315 322.093 C 7.925 323.376 3.258 328.327 1.986 333.053 C -0.150 340.986 4.863 349.757 12.791 351.959 C 18.255 353.476 219.556 353.384 224.101 351.861 C 236.904 347.573 238.887 331.899 227.677 323.592 C 224.858 321.503 224.691 321.500 120.177 321.331 C 57.987 321.231 14.207 321.540 12.315 322.093 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 12.315 258.093 C 7.925 259.376 3.258 264.327 1.986 269.053 C -0.150 276.986 4.863 285.757 12.791 287.959 C 18.255 289.476 219.556 289.384 224.101 287.861 C 236.904 283.573 238.887 267.899 227.677 259.592 C 224.858 257.503 224.691 257.500 120.177 257.331 C 57.987 257.231 14.207 257.540 12.315 258.093 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 12.315 194.093 C 7.925 195.376 3.258 200.327 1.986 205.053 C -0.150 212.986 4.863 221.757 12.791 223.959 C 18.255 225.476 219.556 225.384 224.101 223.861 C 236.904 219.573 238.887 203.899 227.677 195.592 C 224.858 193.503 224.691 193.500 120.177 193.331 C 57.987 193.231 14.207 193.540 12.315 194.093 "/></g>
                </svg>
            </div>

            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.planlægning.title}</h1>
            </div>
        </div>

        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                <svg 
                    version="1.0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40px" 
                    height="40px" 
                    viewBox="0 0 514 514" 
                    style={styles.icon}
                    preserveAspectRatio="xMidYMid meet">
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 292.000 87.594 C 287.871 89.383 283.371 93.449 281.447 97.129 C 280.332 99.263 195.748 394.012 193.618 403.186 C 192.608 407.535 194.811 415.315 198.225 419.457 C 206.815 429.878 223.657 429.350 231.213 418.423 C 233.320 415.376 243.553 380.792 277.052 263.500 C 300.771 180.450 320.422 111.038 320.719 109.252 C 322.005 101.541 316.218 91.366 308.571 87.893 C 303.655 85.660 296.753 85.536 292.000 87.594 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 381.000 150.961 C 376.511 151.835 372.086 154.182 369.298 157.169 C 364.173 162.657 362.534 172.537 365.545 179.782 C 366.587 182.289 379.040 195.470 403.777 220.250 L 440.464 257.000 403.777 293.750 C 379.040 318.530 366.587 331.711 365.545 334.218 C 362.534 341.463 364.173 351.339 369.298 356.834 C 374.836 362.771 385.439 364.952 393.113 361.732 C 398.173 359.609 486.085 272.033 488.921 266.290 C 491.651 260.761 491.652 253.242 488.923 247.710 C 485.915 241.614 397.312 153.557 392.806 152.186 C 387.339 150.522 384.676 150.246 381.000 150.961 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 123.628 151.498 C 119.049 152.677 115.979 155.525 72.810 198.627 C 47.541 223.857 25.996 246.170 24.933 248.210 C 22.400 253.073 22.398 260.921 24.929 265.790 C 25.989 267.830 47.702 290.269 73.179 315.653 C 117.403 359.717 119.714 361.850 124.217 362.775 C 131.873 364.347 139.845 362.034 144.702 356.831 C 149.827 351.343 151.466 341.463 148.455 334.218 C 147.413 331.711 134.960 318.530 110.223 293.750 L 73.536 257.000 110.223 220.250 C 134.960 195.470 147.413 182.289 148.455 179.782 C 149.305 177.737 150.000 174.010 150.000 171.500 C 150.000 157.383 137.521 147.918 123.628 151.498 "/></g>
                </svg>
            </div>

            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.udvikling.title}</h1>
            </div>
        </div>

        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg" 
                width="30px" 
                height="30px" 
                viewBox="0 0 514 514" 
                style={styles.icon}
                preserveAspectRatio="xMidYMid meet">
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 98.448 2.064 C 61.940 6.429 33.273 35.626 29.016 72.777 C 27.656 84.644 27.656 429.356 29.016 441.223 C 33.352 479.065 61.935 507.648 99.777 511.984 C 112.139 513.401 220.440 513.313 227.116 511.882 C 247.262 507.561 247.262 478.439 227.116 474.118 C 223.602 473.365 202.268 472.996 161.701 472.989 C 111.234 472.980 100.705 472.737 96.584 471.487 C 83.571 467.539 73.461 457.429 69.513 444.416 C 67.259 436.985 67.259 77.015 69.513 69.584 C 73.461 56.571 83.571 46.461 96.584 42.513 C 103.764 40.335 357.985 40.258 365.148 42.432 C 377.417 46.156 386.839 54.959 391.835 67.364 C 393.344 71.112 393.547 82.156 394.000 185.000 C 394.455 288.317 394.649 298.769 396.161 301.500 C 404.114 315.866 424.436 315.743 431.620 301.285 C 433.418 297.665 433.513 292.936 433.796 192.500 C 434.114 79.734 433.795 69.771 429.443 56.397 C 421.104 30.771 400.270 11.167 373.500 3.758 L 365.500 1.544 235.500 1.383 C 164.000 1.294 102.327 1.600 98.448 2.064 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 461.644 324.429 C 458.612 325.251 455.554 327.013 453.500 329.122 C 451.691 330.980 428.534 362.875 402.040 400.000 C 375.547 437.125 352.542 468.738 350.919 470.250 C 348.605 472.407 346.996 473.000 343.462 473.000 C 338.103 473.000 341.355 475.769 299.561 435.625 C 283.028 419.744 267.989 406.106 266.143 405.317 C 264.297 404.529 260.630 403.867 257.995 403.847 C 244.992 403.746 236.167 415.459 239.504 428.387 C 240.966 434.051 241.769 434.886 290.085 481.008 C 318.507 508.141 325.320 512.130 343.475 512.275 C 356.765 512.381 368.212 507.939 378.200 498.800 C 384.863 492.704 483.957 353.790 485.647 348.178 C 489.968 333.823 476.427 320.424 461.644 324.429 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 122.704 202.413 C 114.030 204.766 108.677 211.859 108.677 221.000 C 108.677 230.688 114.633 237.952 124.207 239.939 C 127.952 240.717 160.575 240.964 234.017 240.773 C 337.480 240.503 338.539 240.480 342.447 238.430 C 344.617 237.291 347.767 234.662 349.447 232.587 C 352.269 229.100 352.500 228.223 352.500 221.000 C 352.500 213.777 352.269 212.900 349.447 209.413 C 347.767 207.338 344.617 204.709 342.447 203.570 C 338.535 201.518 337.569 201.498 233.000 201.306 C 149.037 201.152 126.521 201.378 122.704 202.413 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 122.704 122.413 C 114.030 124.766 108.677 131.859 108.677 141.000 C 108.677 150.688 114.633 157.952 124.207 159.939 C 127.952 160.717 160.575 160.964 234.017 160.773 C 337.480 160.503 338.539 160.480 342.447 158.430 C 344.617 157.291 347.767 154.662 349.447 152.587 C 352.269 149.100 352.500 148.223 352.500 141.000 C 352.500 133.777 352.269 132.900 349.447 129.413 C 347.767 127.338 344.617 124.709 342.447 123.570 C 338.535 121.518 337.569 121.498 233.000 121.306 C 149.037 121.152 126.521 121.378 122.704 122.413 "/></g>
                    <g fill="#fff" stroke="#000000FF">
                    <path d="M 122.704 282.425 C 114.038 284.755 108.677 291.855 108.677 301.000 C 108.677 310.574 114.597 317.890 123.970 319.900 C 131.131 321.436 249.947 321.419 257.116 319.882 C 260.778 319.096 263.500 317.673 266.255 315.104 C 277.588 304.532 272.279 285.370 257.116 282.118 C 249.227 280.426 129.118 280.700 122.704 282.425 "/></g>
                </svg>
            </div>

            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.testAfWebsite.title}</h1>
            </div>
        </div>

        <div style={styles.StepByStep(isMobile, isTablet)}> 
            <div>
                 <svg 
                 version="1.0" 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="40px" 
                 height="40px" 
                 viewBox="0 0 514 514" 
                 style={styles.icon}
                 preserveAspectRatio="xMidYMid meet">
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 213.500 85.863 C 211.300 86.864 208.917 88.387 208.205 89.248 C 207.156 90.516 206.218 90.623 203.272 89.809 C 197.362 88.178 185.174 89.202 179.924 91.770 C 172.507 95.400 167.377 100.488 163.792 107.772 C 160.794 113.862 160.496 115.299 160.458 123.837 L 160.416 133.215 156.840 134.444 C 147.636 137.608 139.400 145.653 135.947 154.853 C 134.263 159.338 133.897 162.199 134.164 168.755 L 134.500 177.010 131.000 178.099 C 115.980 182.772 104.923 200.727 107.739 215.872 C 108.610 220.555 110.557 226.105 112.749 230.154 C 112.943 230.514 111.035 231.841 108.509 233.103 C 105.982 234.365 101.754 237.682 99.113 240.474 C 87.611 252.635 86.814 271.298 97.210 285.033 L 101.189 290.290 84.486 307.014 L 67.783 323.739 63.141 322.297 C 60.160 321.371 55.818 321.001 51.000 321.264 C 39.867 321.871 35.944 324.317 19.906 340.653 C 4.325 356.523 2.478 359.934 2.619 372.581 C 2.745 383.818 5.527 388.670 20.729 404.169 C 33.893 417.591 37.052 420.000 41.486 420.000 C 47.158 420.000 51.925 413.820 50.532 408.270 C 50.118 406.624 44.646 400.229 37.039 392.500 C 30.000 385.350 23.736 378.517 23.120 377.316 C 21.580 374.313 21.715 368.450 23.400 365.200 C 24.170 363.715 29.730 357.695 35.755 351.822 C 47.811 340.073 50.996 338.503 57.447 341.131 C 60.836 342.511 158.968 438.583 169.017 450.358 C 178.281 461.213 177.586 464.650 163.159 479.328 C 157.297 485.292 151.285 490.809 149.800 491.586 C 146.559 493.283 140.697 493.425 137.684 491.880 C 136.483 491.264 129.650 485.000 122.500 477.961 C 108.833 464.507 106.120 462.879 100.941 465.025 C 95.284 467.367 93.426 473.056 96.424 478.852 C 98.706 483.267 123.282 506.474 128.189 508.850 C 138.234 513.712 148.960 513.626 158.721 508.604 C 164.849 505.452 187.990 482.128 191.070 476.000 C 194.509 469.157 194.921 457.791 192.018 449.829 L 189.777 443.684 210.139 423.427 L 230.500 403.170 236.313 402.462 C 239.510 402.072 245.145 402.052 248.837 402.415 C 252.528 402.779 261.612 403.070 269.024 403.062 L 282.500 403.047 303.114 423.628 L 323.728 444.210 321.762 449.355 C 320.212 453.410 319.887 456.195 320.227 462.500 C 320.857 474.181 323.123 477.866 339.653 494.094 C 355.523 509.675 358.934 511.522 371.581 511.381 C 385.548 511.225 383.420 512.979 448.209 448.200 C 513.062 383.358 511.374 385.405 511.430 371.500 C 511.481 358.592 509.753 355.513 493.120 338.881 C 480.250 326.011 477.782 323.995 472.500 322.033 C 465.268 319.347 453.660 319.537 448.105 322.432 L 444.709 324.202 427.699 307.192 L 410.689 290.182 414.336 285.920 C 420.089 279.200 422.274 272.173 421.775 262.000 C 421.350 253.333 419.657 248.513 414.668 241.765 C 412.100 238.292 403.667 232.551 399.000 231.099 L 395.500 230.010 395.500 220.255 C 395.500 211.595 395.186 209.860 392.700 204.797 C 389.291 197.856 381.928 190.990 374.663 187.979 L 369.333 185.770 369.408 176.635 C 369.472 168.716 369.123 166.732 366.787 161.730 C 363.145 153.931 355.546 146.672 348.232 144.003 L 342.500 141.912 342.489 131.706 C 342.480 122.594 342.194 120.964 339.823 116.500 C 333.851 105.253 323.064 98.436 309.870 97.570 C 305.691 97.295 286.798 94.130 267.885 90.536 C 230.083 83.351 220.779 82.552 213.500 85.863 M 315.961 118.480 C 321.968 121.586 324.922 128.272 323.541 135.634 C 323.000 138.518 320.296 141.900 310.430 152.033 C 299.091 163.678 298.000 165.122 298.000 168.476 C 298.000 173.575 302.408 178.000 307.486 178.000 C 310.650 178.000 312.158 177.018 319.001 170.499 C 323.332 166.373 328.058 162.548 329.503 161.999 C 336.387 159.381 344.214 162.022 348.005 168.241 C 350.217 171.868 350.650 178.865 348.878 182.316 C 348.261 183.517 342.671 189.681 336.456 196.013 C 329.925 202.668 324.865 208.689 324.465 210.283 C 323.021 216.035 328.087 222.000 334.416 222.000 C 336.125 222.000 339.589 219.641 345.216 214.644 C 354.939 206.011 356.649 205.000 361.533 205.000 C 371.018 205.000 378.236 213.598 376.503 222.833 C 375.963 225.715 373.524 228.832 365.031 237.496 C 359.099 243.548 353.740 249.483 353.123 250.684 C 351.416 254.004 351.771 257.439 354.131 260.440 C 359.102 266.759 364.774 265.851 373.043 257.414 C 379.723 250.598 382.621 249.000 388.302 249.000 C 399.055 249.000 406.244 260.716 401.373 270.300 C 400.479 272.060 393.852 279.474 386.646 286.775 C 374.333 299.253 373.545 300.286 373.545 303.969 C 373.545 306.692 374.254 308.641 375.868 310.359 C 380.587 315.383 385.742 314.577 392.765 307.719 L 397.030 303.554 413.015 319.515 C 421.807 328.294 429.000 335.930 429.000 336.484 C 429.000 337.039 408.191 358.305 382.757 383.743 L 336.515 429.993 319.858 413.358 L 303.201 396.723 311.635 388.612 C 321.234 379.379 322.800 376.111 320.159 370.824 C 318.126 366.753 314.007 364.620 309.917 365.518 C 308.142 365.908 304.152 368.845 300.202 372.669 C 288.989 383.525 288.908 383.546 259.082 383.235 C 232.499 382.959 225.641 383.718 219.244 387.647 C 217.735 388.574 207.386 398.367 196.247 409.410 L 175.995 429.487 129.501 383.001 L 83.007 336.515 99.579 319.920 L 116.152 303.326 120.326 305.413 C 123.679 307.090 126.368 307.500 134.000 307.500 C 142.166 307.500 144.272 307.134 149.000 304.892 C 159.257 300.028 167.084 289.389 168.553 278.313 L 169.224 273.252 174.189 272.664 C 188.924 270.919 201.912 257.979 203.649 243.314 L 204.249 238.249 209.202 237.663 C 224.142 235.893 237.373 222.580 238.784 207.897 L 239.235 203.201 244.424 202.553 C 255.308 201.193 265.304 194.057 270.715 183.784 C 273.222 179.025 273.498 177.507 273.498 168.500 C 273.497 160.306 273.116 157.751 271.387 154.350 L 269.278 150.199 284.889 134.718 C 293.475 126.204 301.400 118.748 302.500 118.149 C 305.385 116.579 312.630 116.757 315.961 118.480 M 466.500 340.898 C 471.569 343.248 490.606 362.583 491.549 366.340 C 491.933 367.869 491.999 370.972 491.695 373.235 C 491.175 377.116 487.969 380.528 435.322 433.240 C 404.620 463.979 378.285 489.775 376.800 490.565 C 373.358 492.394 367.672 492.404 364.200 490.586 C 362.715 489.809 356.703 484.292 350.841 478.328 C 339.642 466.934 337.886 463.686 339.451 457.257 C 340.266 453.903 450.924 342.512 455.500 340.438 C 459.536 338.609 461.762 338.702 466.500 340.898 M 174.282 153.382 C 176.052 154.143 186.793 164.155 198.152 175.632 C 217.651 195.336 218.841 196.755 219.489 201.074 C 220.362 206.900 218.390 211.859 213.856 215.237 C 209.405 218.554 205.813 219.292 200.713 217.940 C 197.160 216.999 193.329 213.671 176.270 196.714 C 165.144 185.654 155.305 175.055 154.406 173.161 C 148.585 160.895 161.607 147.937 174.282 153.382 M 199.800 109.080 C 202.094 109.880 203.197 111.113 204.052 113.830 C 209.485 131.098 233.149 153.965 251.194 159.385 C 252.126 159.665 253.421 161.675 254.073 163.851 C 257.129 174.049 250.174 183.167 239.340 183.167 C 236.900 183.167 233.913 182.509 232.702 181.704 C 231.491 180.900 219.385 169.275 205.801 155.871 C 184.294 134.650 180.961 130.951 180.013 127.250 C 178.132 119.916 181.319 113.126 188.500 109.164 C 191.073 107.745 195.867 107.709 199.800 109.080 M 148.790 197.907 C 150.830 198.956 159.319 206.734 167.653 215.190 C 184.382 232.164 185.982 234.861 183.867 242.520 C 182.503 247.461 177.234 252.546 172.573 253.420 C 165.163 254.811 162.585 253.139 145.357 235.773 C 136.479 226.823 128.716 218.517 128.107 217.316 C 127.498 216.114 127.000 213.143 127.000 210.714 C 127.000 199.642 138.741 192.742 148.790 197.907 M 130.800 250.427 C 132.285 251.211 136.812 255.209 140.860 259.311 C 147.388 265.925 148.278 267.283 148.733 271.325 C 149.016 273.831 148.966 276.998 148.624 278.363 C 147.625 282.341 143.164 286.871 139.023 288.111 C 132.137 290.174 128.458 288.664 119.672 280.167 C 108.887 269.736 106.879 264.459 110.852 256.984 C 114.636 249.864 123.943 246.804 130.800 250.427 M 253.796 107.662 L 279.092 112.399 265.609 125.882 L 252.125 139.366 246.709 135.770 C 235.260 128.168 222.000 111.715 222.000 105.110 C 222.000 102.018 224.887 102.250 253.796 107.662 "/></g>
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 415.500 4.980 C 414.400 5.450 404.500 14.876 393.500 25.926 L 373.500 46.019 373.500 50.596 C 373.500 56.361 377.080 60.000 382.751 60.000 C 386.151 60.000 387.763 58.634 407.199 39.279 C 418.643 27.882 428.272 17.718 428.598 16.692 C 431.020 9.061 422.915 1.815 415.500 4.980 "/></g>
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 87.888 5.450 C 84.628 7.283 82.613 11.960 83.446 15.755 C 83.886 17.758 90.447 24.983 104.845 39.322 C 124.507 58.903 125.809 60.000 129.381 60.000 C 134.648 60.000 139.000 55.645 139.000 50.375 C 139.000 46.793 137.917 45.509 118.246 25.775 C 100.628 8.101 96.963 4.880 93.996 4.468 C 91.914 4.178 89.443 4.576 87.888 5.450 "/></g>
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 252.213 2.531 C 246.600 4.928 246.000 7.921 246.000 33.500 C 246.000 58.696 246.580 61.697 251.994 64.497 C 255.927 66.530 259.934 65.764 263.124 62.368 L 265.500 59.839 265.500 33.442 L 265.500 7.045 263.000 4.642 C 259.714 1.484 256.251 0.806 252.213 2.531 "/></g>
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 65.750 433.080 C 62.952 434.710 60.793 439.783 61.510 443.046 C 62.333 446.795 67.351 451.000 71.000 451.000 C 74.649 451.000 79.667 446.795 80.490 443.046 C 81.230 439.678 78.979 434.594 76.055 433.030 C 73.615 431.724 68.032 431.751 65.750 433.080 "/></g>
                     <g fill="#fff" stroke="#000000FF">
                     <path d="M 336.589 337.077 C 332.414 342.039 333.558 348.686 339.079 351.541 C 345.746 354.989 353.000 350.539 353.000 343.002 C 353.000 334.468 342.096 330.531 336.589 337.077 "/></g>
                 </svg>
            </div>

            <div>
                <h1 style={styles.title(isMobile, isTablet)}>{StepByStep.vedligeholdelse.title}</h1>
            </div>
        </div>
    </div>  

    <div style={styles.buttonContainer}>
        <button style={styles.button(isMobile, isTablet)}>{StepByStep.button}</button>
    </div>
    </>
  )
}

export default Aboutpage