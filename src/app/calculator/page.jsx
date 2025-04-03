"use client"; 
import style from './css/mainPage.module.css'
import { useEffect } from "react";

export default function MainPage(){
    useEffect(() => {
        const buttons = document.querySelectorAll(`.${style.main__content__button}`);
        const display = document.querySelector(`.${style.main__content__display}`)
        let data = [];
        const n = 0;
        buttons.forEach((button) => 
            button.addEventListener('click', () => {
                if(button.textContent === 'AC'){
                    display.textContent = '';
                    data = [];
                    return;
                }
                if(data.length <22){
                    if(button.textContent === '='){
                        try{
                            display.textContent = eval(display.textContent); 
                            data.length=display.textContent.length
                        } catch{
                            display.textContent = 'Error'
                        }
                        return;
                    }
                    if(display.textContent === 'function Error() { [native code] }'){
                        display.textContent = 'Error'
                    }
                    if(button.textContent === '%'){
                        if(display.textContent){
                            const procent = display.textContent + '/100';
                            display.textContent = eval(procent);
                        }
                        return;
                    }
                    data.push(n)
                    console.log(data.length)
                    display.textContent += button.textContent
                }
            })
        );
    }, []);
    return(
    <main className={style.main}>
        <div className={style.main__content}>
            <div className={style.main__content__display}></div>
            <div className={style.main__content__buttons}>
                <button className={style.main__content__button}>{'('}</button>
                <button className={style.main__content__button}>{')'}</button>
                <button className={style.main__content__button}>%</button>
                <button className={style.main__content__button}>AC</button>
                <button className={style.main__content__button}>7</button>
                <button className={style.main__content__button}>8</button>
                <button className={style.main__content__button}>9</button>
                <button className={style.main__content__button}>/</button>
                <button className={style.main__content__button}>4</button>
                <button className={style.main__content__button}>5</button>
                <button className={style.main__content__button}>6</button>
                <button className={style.main__content__button}>*</button>
                <button className={style.main__content__button}>1</button>
                <button className={style.main__content__button}>2</button>
                <button className={style.main__content__button}>3</button>
                <button className={style.main__content__button}>-</button>
                <button className={style.main__content__button}>0</button>
                <button className={style.main__content__button}>.</button>
                <button className={style.main__content__button}>=</button>
                <button className={style.main__content__button}>+</button>
            </div>
        </div>
    </main>
  )
}