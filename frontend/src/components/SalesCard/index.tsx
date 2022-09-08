import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import { useState } from 'react';

function SalesCard() {

    const min= new Date(new Date().setDate(new Date().getDate() - 365));
    const max= new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);



    return (
        <div className="bg-card">
            <h2>Vendas</h2>
            <div id="forms">
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">01/05/2002</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">01/02/2002</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">01/02/2002</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesCard;