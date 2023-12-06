import "../css/headerstyle.css";
const Body =()=>{
    return(
        <header className="header">
            <div className="header_wrap">
                <h1 className="header_title">
                    <strong>
                        Вітаємо в магазині <em>NEJANNA</em><br/>
                        Перейдіть до вибору асортименту
                    </strong>
                </h1>
                <a href="/products"className="btn">
                    Перейти
                </a>
            </div>
        </header>
    )
}
export default Body;