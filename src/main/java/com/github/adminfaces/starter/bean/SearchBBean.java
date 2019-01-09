package com.github.adminfaces.starter.bean;

import com.github.adminfaces.starter.model.SearchData;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import org.omnifaces.util.Faces;

@ManagedBean(name = "searchBBean")
public class SearchBBean
        implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    private List<SearchData> searchData ;
    private SearchData search;
    @PostConstruct
    public void init() {
        searchData = new ArrayList<SearchData>();
        search = new SearchData("Pan United", "Sungei Kadut", "2", "North", "33", "330", "30000", "Yes", "Tol Details", "Txx", "LSS", "", "", "year of lodge");
        searchData.add(search);
        search = new SearchData("Alliance", "East Coast", "2", "North", "33", "330", "30000", "Yes", "Tol Details", "Txx", "LSS", "", "", "year of lodge");
        searchData.add(search);
        search = new SearchData("Sinmix", "Marina East", "2", "North", "33", "330", "30000", "Yes", "Tol Details", "Txx", "LSS", "", "", "year of lodge");
        searchData.add(search);
    }

    public List<SearchData> getSearchData() {
        return searchData;
    }

    public void setSearchData(List<SearchData> searchData) {
        this.searchData = searchData;
    }

    
}
