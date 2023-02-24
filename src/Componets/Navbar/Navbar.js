import { List, CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless'
import Popper from '../Popper/Popper';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const cx = classNames.bind(styles)

function Navbar({children}) {

  const [showMenu,setShowMenu] = useState(false)

  const handleClick =() =>{
    setShowMenu(()=>!showMenu)
  }

    return (
      <div className={cx('wrapper')}>
        <div className={cx('sidebar')}>
          <Tippy
            hideOnClick="toggle"
            trigger="click"
            interactive
            offset={[0, 4]}
            placement="bottom"
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                <Popper>
                  <div className={cx('tippy')}>
                    <NavLink onClick={()=>{window.scrollTo(0,0)}} className={nav=>cx({active:nav.isActive})} to="/">Pho bien</NavLink>
                    <NavLink onClick={()=>{window.scrollTo(0,0)}} className={nav=>cx({active:nav.isActive})} to="/iphone">Iphone</NavLink>
                    <NavLink onClick={()=>{window.scrollTo(0,0)}} className={nav=>cx({active:nav.isActive})} to="/ipad">Ipad</NavLink>
                    <NavLink onClick={()=>{window.scrollTo(0,0)}} className={nav=>cx({active:nav.isActive})} to="/p>500"> {'>500 $'} </NavLink>
                    <NavLink onClick={()=>{window.scrollTo(0,0)}} className={nav=>cx({active:nav.isActive})} to="/500<p<1000">{'500 $ - 1000 $'}</NavLink>
                  </div>
                </Popper>
              </div>
            )}
          >
            <div className={cx('menu')} onClick={handleClick} >
              <span>
                <List size={16} weight="fill" />
              </span>
              <h3>Danh muc san pham</h3>
              {!showMenu  && (
                <span >
                  <CaretDown size={16} weight="fill" />
                </span>
              )}
              {showMenu  && (
                <span >
                  <CaretUp size={16} weight="fill" />
                </span>
              )}
            </div>
          </Tippy>
        </div>
        <div className={cx('inner')}>{children}</div>
      </div>
    ); 
}

export default Navbar;