import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { format } from "date-fns";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container } from "./styles";

export default function OrderHistory() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await api.put(`/orders/${orderId}`, { status: newStatus });
  
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível mudar o status!");
      }
    }
  };  

  const fetchOrders = async () => {
    const response = await api.get('/orders')
    setOrders(response.data)
  }

  const cleanupConfirmedOrders = async () => {
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const confirmedOrders = orders.filter((order) => {
      return order.status === 'Entregue' && order.confirmed_at && order.confirmed_at < currentDate
    })

    if (confirmedOrders) {
      for (const order of confirmedOrders) {
        await api.delete(`/orders/${order.id}`);
      }
      fetchOrders();
    }
  }


  useEffect(() => {
    fetchOrders()
    cleanupConfirmedOrders()
  }, [])

  return (
    <Container>
      <Header/>
      <main>
        { 
          orders.length > 0 ? (
            <>
              {
                 !user.isAdmin ? (
                  <>
                  <h1>Histórico de pedidos</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orders.map(order => (
                          <tr key={order.id}>
                            <td><span className={`status-${order.status.toLowerCase()}`}></span>{order.status}</td>
                            <td>{order.order_code}</td>
                            <td>{order.order_details}</td>
                            <td>{format(new Date(order.order_date), "MM/dd 'às' HH'h'mm")}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </>
                ): (
                  <>
                  <h1>Pedidos</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orders.map(order => (
                          <tr key={order.id}>
                            <td><span className={`status-${order.status.toLowerCase()}`}></span>
                              <select defaultValue={order.status} className="custom-select" onChange={(e) => handleStatusChange(order.id, e.target.value) }>
                                <option value="Pendente">Pendente</option>
                                <option value="Preparando">Preparando</option>
                                <option value="Entregue">Entregue</option>
                              </select>
                            </td>
                            <td>{order.order_code}</td>
                            <td>{order.order_details}</td>
                            <td>{format(new Date(order.order_date), "MM/dd 'às' HH'h'mm")}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </>
                )
              }
            </>
          ) : (
            <p className="empty-order">Nenhum Pedido Encontrado!</p>
          )
        }
      </main>
      <Footer/>
    </Container>
  );
}
