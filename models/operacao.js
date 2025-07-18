export class Operacao {
    constructor (operation_id,origin,destiny,total_distancy_km, cargo_type,total_cargo_value,traffic_accident_year_history, route_weather_forecas, has_insurance ){
     this.operation_id = operation_id;
     this.origin = origin;
     this.destiny = destiny;
     this.total_distancy_km = total_distancy_km;
     this.cargo_type = cargo_type;
     this.total_cargo_value = total_cargo_value;
     this.traffic_accident_year_history = traffic_accident_year_history;
     this.route_weather_forecas = route_weather_forecas;
     this.has_insurance = has_insurance;
    }
}
