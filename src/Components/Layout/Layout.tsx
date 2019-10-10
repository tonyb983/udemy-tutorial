import React from 'react'
import styles from './Layout.module.css';

const Layout: React.FC = (props) => {
  return(
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.LayoutContent}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default Layout;
