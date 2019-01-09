/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.adminfaces.starter.bean;

import java.io.Serializable;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import org.primefaces.model.chart.Axis;
import org.primefaces.model.chart.AxisType;
import org.primefaces.model.chart.BarChartModel;
import org.primefaces.model.chart.CategoryAxis;
import org.primefaces.model.chart.ChartSeries;
import org.primefaces.model.chart.LineChartModel;

/**
 *
 * @author Htet Nanda Kyaw
 */
@ManagedBean(name = "lineAndBarBBean")
public class LineAndBarBBean implements Serializable {

    private LineChartModel lineModel2;
    private LineChartModel lineModel;
    private BarChartModel barModel;
    private BarChartModel barModel1;

    @PostConstruct
    public void init() {
        createLineModels();
        createBarModel();
    }
    private void createBarModel() {
        barModel = initBarModel();
        barModel.setTitle("Island - Truck Capacity (m3)");
        barModel.setLegendPosition("ne");
        Axis xAxis = barModel.getAxis(AxisType.X);
        xAxis.setTickAngle(-70);
        Axis yAxis = barModel.getAxis(AxisType.Y);
        yAxis.setTickFormat("%.0f");
        yAxis.setMin(3650);
        yAxis.setMax(3950);
        
        barModel1 = initBarModel();
        barModel1.setTitle("Island - Volume per month (m3)");
        barModel1.setLegendPosition("ne");
        Axis xAxis1 = barModel1.getAxis(AxisType.X);
        xAxis1.setTickAngle(-70);
        Axis yAxis1 = barModel1.getAxis(AxisType.Y);
        yAxis1.setTickFormat("%.0f");
        yAxis1.setMin(3650);
        yAxis1.setMax(3950);
    }
    
    private BarChartModel initBarModel() {
        BarChartModel model = new BarChartModel();
 
        ChartSeries boys = new ChartSeries();
        boys.setLabel("Boys");
        boys.set("Jan-2018", 3745);
        boys.set("Feb-2018", 3760);
        boys.set("Mar-2018", 3760);
        boys.set("Apr-2018", 3755);
        boys.set("May-2018", 3755);
        boys.set("Jun-2018", 3755);
        boys.set("Jul-2018", 3800);
        boys.set("Aug-2018", 3850);
        boys.set("Sept-2018", 3850);
        boys.set("Oct-2018", 3900);
        boys.set("Nov-2018", 3900);
        boys.set("Dec-2018", 3850);
        model.addSeries(boys);
 
        return model;
    }
    
    private void createLineModels() {
        lineModel2 = initCategoryModel();
        lineModel2.setTitle("Island - No. of Plant");
        lineModel2.setLegendPosition("e");
        lineModel2.setShowPointLabels(true);
        lineModel2.getAxes().put(AxisType.X, new CategoryAxis(" "));
        Axis xAxis = lineModel2.getAxis(AxisType.X);
        xAxis.setTickAngle(-70);
        Axis yAxis = lineModel2.getAxis(AxisType.Y);
        yAxis.setTickFormat("%.0f");
        yAxis.setMin(27);
        yAxis.setMax(34);

        lineModel = initNoTruckModel();
        lineModel.setTitle("Island - No. of Truck");
        lineModel.setLegendPosition("e");
        lineModel.setShowPointLabels(true);
        lineModel.getAxes().put(AxisType.X, new CategoryAxis(" "));
        Axis xAxis1 = lineModel.getAxis(AxisType.X);
        xAxis1.setTickAngle(-70);
        Axis yAxis1 = lineModel.getAxis(AxisType.Y);
        yAxis1.setTickFormat("%.0f");
        yAxis1.setMin(405);
        yAxis1.setMax(438);

    }

    private LineChartModel initCategoryModel() {
        LineChartModel model = new LineChartModel();

        ChartSeries boys = new ChartSeries();
        boys.setLabel(" ");
        boys.set("Jan-2018", 29);
        boys.set("Feb-2018", 30);
        boys.set("Mar-2018", 29);
        boys.set("Apr-2018", 30);
        boys.set("May-2018", 31);
        boys.set("Jun-2018", 32);
        boys.set("Jul-2018", 33);
        boys.set("Aug-2018", 33);
        boys.set("Sept-2018", 33);
        boys.set("Oct-2018", 33);
        boys.set("Nov-2018", 33);
        boys.set("Dec-2018", 33);
        model.addSeries(boys);

        return model;
    }

    private LineChartModel initNoTruckModel() {
        LineChartModel model = new LineChartModel();

        ChartSeries boys = new ChartSeries();
        boys.setLabel(" ");
        boys.set("Jan-2018", 417);
        boys.set("Feb-2018", 420);
        boys.set("Mar-2018", 420);
        boys.set("Apr-2018", 419);
        boys.set("May-2018", 422);
        boys.set("Jun-2018", 422);
        boys.set("Jul-2018", 422);
        boys.set("Aug-2018", 423);
        boys.set("Sept-2018", 426);
        boys.set("Oct-2018", 430);
        boys.set("Nov-2018", 433);
        boys.set("Dec-2018", 433);
        model.addSeries(boys);

        return model;
    }

    public LineChartModel getLineModel2() {
        return lineModel2;
    }

    public void setLineModel2(LineChartModel lineModel2) {
        this.lineModel2 = lineModel2;
    }

    public LineChartModel getLineModel() {
        return lineModel;
    }

    public void setLineModel(LineChartModel lineModel) {
        this.lineModel = lineModel;
    }

    public BarChartModel getBarModel() {
        return barModel;
    }

    public void setBarModel(BarChartModel barModel) {
        this.barModel = barModel;
    }

    public BarChartModel getBarModel1() {
        return barModel1;
    }

    public void setBarModel1(BarChartModel barModel1) {
        this.barModel1 = barModel1;
    }
    
}
