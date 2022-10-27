import React, { useState, useEffect, ChangeEvent } from "react";
import { Modules } from "../../Interfaces/ICluster";
import { Delete, Get, Post } from "../../Services";
import { apiRoute } from "../../utils";
import { useLocation } from "react-router-dom";

const Charts = (props: Modules) => {
  const { state }: any = useLocation();
  const [id] = useState(props.id || state[0]);
  const [grafanaCharts, setGrafanaCharts] = useState([])

  useEffect(() => {
    console.log('placeholder');
  }, []);

  return (
    <div>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797740744&to=1666884140744&panelId=20" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797849461&to=1666884249461&panelId=155" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797898580&to=1666884298580&panelId=19" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797929305&to=1666884329306&panelId=16" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797963497&to=1666884363497&panelId=77" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797977600&to=1666884377600&panelId=78" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666797988931&to=1666884388931&panelId=74" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798000619&to=1666884400619&panelId=152" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798017473&to=1666884417473&panelId=24" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798029920&to=1666884429920&panelId=156" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798045952&to=1666884445952&panelId=84" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798065477&to=1666884465477&panelId=160" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798102565&to=1666884502565&panelId=9" width="450" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:3001/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=1666798127989&to=1666884527989&panelId=41" width="450" height="200" frameBorder="0"></iframe>
    </div>
  );
};

export default Charts;