import React from 'react'
import JsonData from './Data.json'
function Data(){
  console.log(JsonData);
	const DisplayData=JsonData.map((info)=>{
			return(
				<tr key={Object.values(info)[0]}>
					<td>{Object.values(info)[0]}</td>
					<td>{Object.values(info)[1]}</td>
					<td>{Object.values(info)[2]}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table >
				<tbody>
					{DisplayData}
				</tbody>
			</table>
			
		</div>
	)
}

export default Data;
