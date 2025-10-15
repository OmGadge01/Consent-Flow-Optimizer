import data from '../data/mockConsents.json';
export const fetchConsents=()=>new Promise(r=>setTimeout(()=>r([...data]),300));
export const updateConsentStatus=(id,status)=>new Promise(r=>{const i=data.findIndex(d=>d.id===id);if(i!==-1){data[i].status=status;r({...data[i]});}else r(null);});