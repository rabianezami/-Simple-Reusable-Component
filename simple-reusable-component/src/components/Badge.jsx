export default function Badge({label, value}) {
    return(
        <div className="badge">
          <span>{label}</span>  
          <span>{value}</span>
        </div>
    )
}