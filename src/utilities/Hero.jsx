import styled from 'react-emotion';


const Hero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: ${props => props.theme.colors.white.light};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  text-align: center;


  // css animacion titulo

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 140px;
    overflow:hidden;
    
    font-family: 'Lato', sans-serif;
    font-size: 50px;
    line-height: 60px;
    color: #ecf0f1;
    @media (max-width: ${1000 / 16}em) {
      height: 100px;
      font-size: 25px;
      line-height: 60px;
    }
    
    &__container {
      font-weight: 500;
      overflow: hidden;
      height: 60px; 
      padding: 0px 35px;
     
      @media (max-width: ${1000 / 16}em) {
        padding: 0px 15px;

      }
      
  
      &:before {
        content: '{';
        left: 0;
      }
  
      &:after {
        content: '}';
        position: absolute;
        right: 0;
      }
  
      &:after, &:before {
        position: absolute;
        top: 0;
        
        color: #d85611;
        font-size: 62px;
        line-height: 50px;
        @media (max-width: ${1000 / 16}em) {
          font-size: 34px;
          line-height: 60px;
        }
        
        -webkit-animation-name: opacity;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-name: opacity;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }
  
      &__text {
        display: inline;
        float: left;
        margin: 0;
      }
  
      &__list {
        margin-top: 0;
        padding-left: 340px;
        text-align: left;
        list-style: none;
        
        @media (max-width: ${1000 / 16}em) {
          padding-left: 160px;
          
        }

        -webkit-animation-name: change;
        -webkit-animation-duration: 10s;
        -webkit-animation-iteration-count: infinite;
        animation-name: change;
        animation-duration: 10s;
        animation-iteration-count: infinite;
  
        &__item {
          line-height:60px;
          margin:0;
                      
          }
         
        }
      }
    }
  }
  
  @-webkit-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-webkit-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @-o-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-o-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @-moz-keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @-moz-keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }
  
  @keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  
  @keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }


  `;


export default Hero;
