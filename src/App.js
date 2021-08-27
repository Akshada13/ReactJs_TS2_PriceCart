import './App.css';

function App() {
  return (
  
    <div className={'parent'} style={{display:'flex', justifyContent:'center',gap:'1rem'}}>
    <Vote subStatus = "FREE" price = "$0" user = "Single User" 
    storage = "5GB Storage" publicProjects = "Unlimited Public Projects"
    communityAccess = "Community Access" privateProjects = "Unlimited Private Projects"
    phoneSupport = "Dedicated Phone Support" freeSubdomain = "Free Subdomain"
    monthlyReport = "Monthly Status Reports"
    />
    <Vote subStatus = "PLUS" price = "$9" user = " 5 Users" 
    storage = "50GB Storage" publicProjects = "Unlimited Public Projects"
    communityAccess = "Community Access" privateProjects = "Unlimited Private Projects"
    phoneSupport = "Dedicated Phone Support" freeSubdomain = "Free Subdomain"
    monthlyReport = "Monthly Status Reports"/>
    
    <Vote subStatus = "PRO" price = "$49" user = "Unlimited Users" 
    storage = "150GB Storage" publicProjects = "Unlimited Public Projects"
    communityAccess = "Community Access" privateProjects = "Unlimited Private Projects"
    phoneSupport = "Dedicated Phone Support" freeSubdomain = "Unlimited Free Subdomain"
    monthlyReport = "Monthly Status Reports"
    />
  </div>
  );
} 

function Vote(a){
  return(
    <div className={'container'}>
      <div className={'plan'}>
        <div className={'plan-header'}>
          <label className={'sub-status'}>{a.subStatus}</label><br></br>
          <label className={'price'}>{a.price}<span className={'month'}>/month</span></label>
        </div>
        <hr></hr>
      <ul className="plan-feature">
      <li>{a.user}</li>
      <li>{a.storage}</li>
      <li>{a.publicProjects}</li>
      <li>{a.communityAccess}</li>
      <li>{a.privateProjects}</li>
      <li>{a.phoneSupport}</li>
      <li>{a.freeSubdomain}</li>
      <li>{a.monthlyReport}</li>
    </ul>
    <button class="plan-choose" value="Button"  
    type="submit" name="Button">BUTTON</button>
    </div>
</div>
  )
}
export default App;