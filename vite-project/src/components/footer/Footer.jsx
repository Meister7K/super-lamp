import './Footer.scss'

export const Footer=()=>{

    const currentYear = new Date().getFullYear();

    return(
        <div className="copyright">
         <p>
          <span>&copy;</span> {currentYear} 7K Portfolio
        </p>
        </div>
    )
}