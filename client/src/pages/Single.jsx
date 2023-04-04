import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
          <img src="https://images.pexels.com/photos/13064556/pexels-photo-13064556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        <div className='user'>
          <img src="https://images.pexels.com/photos/13372881/pexels-photo-13372881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        <div className='info'>
          <span>Mia</span>
          <p>Two days ago</p>
        </div>
        <div className='edit'>
          <Link to={`/write?edit`}/>
          <img src={Edit} alt=""/>
          <img src={Delete} alt=""/>
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum feugiat eros vitae scelerisque. Mauris elementum mattis metus. Morbi sem ex, venenatis quis ex at, sollicitudin tincidunt turpis. Aenean aliquet hendrerit lorem, et rhoncus sem sollicitudin et. Aenean commodo aliquet vulputate. Curabitur commodo bibendum lacinia. Donec faucibus hendrerit dolor ac convallis. Ut maximus vitae risus et posuere. Integer egestas vitae tellus sit amet pretium.

Pellentesque lacinia nunc nisi, ac congue erat suscipit in. Nam massa nisi, mollis vel leo ut, varius vestibulum orci. Etiam vestibulum ligula a mollis tincidunt. Nullam efficitur libero eget lacinia tristique. Integer viverra lobortis ligula, id bibendum neque sollicitudin condimentum. Morbi ipsum augue, sollicitudin a condimentum et, imperdiet a velit. Donec eu nisi velit. Aliquam feugiat, tellus at pulvinar iaculis, erat urna lacinia nisi, sit amet rhoncus nulla enim id est. Donec blandit lectus eget nisl fringilla, tempor luctus ipsum dictum.

Pellentesque tristique sem a nunc luctus porttitor. Cras eget neque blandit, tincidunt felis vel, consectetur ipsum. Sed vel tellus eu lacus ullamcorper efficitur. Morbi dolor metus, maximus vitae cursus sit amet, vulputate eu odio. Phasellus consequat eleifend metus, mollis convallis elit finibus ut. Maecenas quis facilisis eros, eu accumsan tellus. Vivamus vitae facilisis nulla. Phasellus rutrum nisl quis iaculis pellentesque. Fusce mattis laoreet lectus mollis elementum. Donec vehicula quam iaculis pulvinar pretium.
</p>
      </div>
    <div className='menu'>
    <Menu />
    </div>
    </div>
  )
}

export default Single