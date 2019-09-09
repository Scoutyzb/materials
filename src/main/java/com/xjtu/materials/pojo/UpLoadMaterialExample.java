package com.xjtu.materials.pojo;

import java.util.ArrayList;
import java.util.List;

public class UpLoadMaterialExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public UpLoadMaterialExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andMaterialidIsNull() {
            addCriterion("materialID is null");
            return (Criteria) this;
        }

        public Criteria andMaterialidIsNotNull() {
            addCriterion("materialID is not null");
            return (Criteria) this;
        }

        public Criteria andMaterialidEqualTo(String value) {
            addCriterion("materialID =", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidNotEqualTo(String value) {
            addCriterion("materialID <>", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidGreaterThan(String value) {
            addCriterion("materialID >", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidGreaterThanOrEqualTo(String value) {
            addCriterion("materialID >=", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidLessThan(String value) {
            addCriterion("materialID <", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidLessThanOrEqualTo(String value) {
            addCriterion("materialID <=", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidLike(String value) {
            addCriterion("materialID like", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidNotLike(String value) {
            addCriterion("materialID not like", value, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidIn(List<String> values) {
            addCriterion("materialID in", values, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidNotIn(List<String> values) {
            addCriterion("materialID not in", values, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidBetween(String value1, String value2) {
            addCriterion("materialID between", value1, value2, "materialid");
            return (Criteria) this;
        }

        public Criteria andMaterialidNotBetween(String value1, String value2) {
            addCriterion("materialID not between", value1, value2, "materialid");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNull() {
            addCriterion("userName is null");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNotNull() {
            addCriterion("userName is not null");
            return (Criteria) this;
        }

        public Criteria andUsernameEqualTo(String value) {
            addCriterion("userName =", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotEqualTo(String value) {
            addCriterion("userName <>", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThan(String value) {
            addCriterion("userName >", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThanOrEqualTo(String value) {
            addCriterion("userName >=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThan(String value) {
            addCriterion("userName <", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThanOrEqualTo(String value) {
            addCriterion("userName <=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLike(String value) {
            addCriterion("userName like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotLike(String value) {
            addCriterion("userName not like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameIn(List<String> values) {
            addCriterion("userName in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotIn(List<String> values) {
            addCriterion("userName not in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameBetween(String value1, String value2) {
            addCriterion("userName between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotBetween(String value1, String value2) {
            addCriterion("userName not between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andMaterialnameIsNull() {
            addCriterion("materialName is null");
            return (Criteria) this;
        }

        public Criteria andMaterialnameIsNotNull() {
            addCriterion("materialName is not null");
            return (Criteria) this;
        }

        public Criteria andMaterialnameEqualTo(String value) {
            addCriterion("materialName =", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameNotEqualTo(String value) {
            addCriterion("materialName <>", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameGreaterThan(String value) {
            addCriterion("materialName >", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameGreaterThanOrEqualTo(String value) {
            addCriterion("materialName >=", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameLessThan(String value) {
            addCriterion("materialName <", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameLessThanOrEqualTo(String value) {
            addCriterion("materialName <=", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameLike(String value) {
            addCriterion("materialName like", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameNotLike(String value) {
            addCriterion("materialName not like", value, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameIn(List<String> values) {
            addCriterion("materialName in", values, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameNotIn(List<String> values) {
            addCriterion("materialName not in", values, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameBetween(String value1, String value2) {
            addCriterion("materialName between", value1, value2, "materialname");
            return (Criteria) this;
        }

        public Criteria andMaterialnameNotBetween(String value1, String value2) {
            addCriterion("materialName not between", value1, value2, "materialname");
            return (Criteria) this;
        }

        public Criteria andTypeIsNull() {
            addCriterion("type is null");
            return (Criteria) this;
        }

        public Criteria andTypeIsNotNull() {
            addCriterion("type is not null");
            return (Criteria) this;
        }

        public Criteria andTypeEqualTo(String value) {
            addCriterion("type =", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotEqualTo(String value) {
            addCriterion("type <>", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThan(String value) {
            addCriterion("type >", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThanOrEqualTo(String value) {
            addCriterion("type >=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThan(String value) {
            addCriterion("type <", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThanOrEqualTo(String value) {
            addCriterion("type <=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLike(String value) {
            addCriterion("type like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotLike(String value) {
            addCriterion("type not like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeIn(List<String> values) {
            addCriterion("type in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotIn(List<String> values) {
            addCriterion("type not in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeBetween(String value1, String value2) {
            addCriterion("type between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotBetween(String value1, String value2) {
            addCriterion("type not between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIsNull() {
            addCriterion("isAuthenticated is null");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIsNotNull() {
            addCriterion("isAuthenticated is not null");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedEqualTo(String value) {
            addCriterion("isAuthenticated =", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotEqualTo(String value) {
            addCriterion("isAuthenticated <>", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedGreaterThan(String value) {
            addCriterion("isAuthenticated >", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedGreaterThanOrEqualTo(String value) {
            addCriterion("isAuthenticated >=", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLessThan(String value) {
            addCriterion("isAuthenticated <", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLessThanOrEqualTo(String value) {
            addCriterion("isAuthenticated <=", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLike(String value) {
            addCriterion("isAuthenticated like", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotLike(String value) {
            addCriterion("isAuthenticated not like", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIn(List<String> values) {
            addCriterion("isAuthenticated in", values, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotIn(List<String> values) {
            addCriterion("isAuthenticated not in", values, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedBetween(String value1, String value2) {
            addCriterion("isAuthenticated between", value1, value2, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotBetween(String value1, String value2) {
            addCriterion("isAuthenticated not between", value1, value2, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andTimeIsNull() {
            addCriterion("time is null");
            return (Criteria) this;
        }

        public Criteria andTimeIsNotNull() {
            addCriterion("time is not null");
            return (Criteria) this;
        }

        public Criteria andTimeEqualTo(String value) {
            addCriterion("time =", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotEqualTo(String value) {
            addCriterion("time <>", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThan(String value) {
            addCriterion("time >", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThanOrEqualTo(String value) {
            addCriterion("time >=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThan(String value) {
            addCriterion("time <", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThanOrEqualTo(String value) {
            addCriterion("time <=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLike(String value) {
            addCriterion("time like", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotLike(String value) {
            addCriterion("time not like", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeIn(List<String> values) {
            addCriterion("time in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotIn(List<String> values) {
            addCriterion("time not in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeBetween(String value1, String value2) {
            addCriterion("time between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotBetween(String value1, String value2) {
            addCriterion("time not between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andPathIsNull() {
            addCriterion("path is null");
            return (Criteria) this;
        }

        public Criteria andPathIsNotNull() {
            addCriterion("path is not null");
            return (Criteria) this;
        }

        public Criteria andPathEqualTo(String value) {
            addCriterion("path =", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotEqualTo(String value) {
            addCriterion("path <>", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathGreaterThan(String value) {
            addCriterion("path >", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathGreaterThanOrEqualTo(String value) {
            addCriterion("path >=", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLessThan(String value) {
            addCriterion("path <", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLessThanOrEqualTo(String value) {
            addCriterion("path <=", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLike(String value) {
            addCriterion("path like", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotLike(String value) {
            addCriterion("path not like", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathIn(List<String> values) {
            addCriterion("path in", values, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotIn(List<String> values) {
            addCriterion("path not in", values, "path");
            return (Criteria) this;
        }

        public Criteria andPathBetween(String value1, String value2) {
            addCriterion("path between", value1, value2, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotBetween(String value1, String value2) {
            addCriterion("path not between", value1, value2, "path");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathIsNull() {
            addCriterion("generalDensityPath is null");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathIsNotNull() {
            addCriterion("generalDensityPath is not null");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathEqualTo(String value) {
            addCriterion("generalDensityPath =", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathNotEqualTo(String value) {
            addCriterion("generalDensityPath <>", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathGreaterThan(String value) {
            addCriterion("generalDensityPath >", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathGreaterThanOrEqualTo(String value) {
            addCriterion("generalDensityPath >=", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathLessThan(String value) {
            addCriterion("generalDensityPath <", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathLessThanOrEqualTo(String value) {
            addCriterion("generalDensityPath <=", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathLike(String value) {
            addCriterion("generalDensityPath like", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathNotLike(String value) {
            addCriterion("generalDensityPath not like", value, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathIn(List<String> values) {
            addCriterion("generalDensityPath in", values, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathNotIn(List<String> values) {
            addCriterion("generalDensityPath not in", values, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathBetween(String value1, String value2) {
            addCriterion("generalDensityPath between", value1, value2, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andGeneraldensitypathNotBetween(String value1, String value2) {
            addCriterion("generalDensityPath not between", value1, value2, "generaldensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathIsNull() {
            addCriterion("partitionDensityPath is null");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathIsNotNull() {
            addCriterion("partitionDensityPath is not null");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathEqualTo(String value) {
            addCriterion("partitionDensityPath =", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathNotEqualTo(String value) {
            addCriterion("partitionDensityPath <>", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathGreaterThan(String value) {
            addCriterion("partitionDensityPath >", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathGreaterThanOrEqualTo(String value) {
            addCriterion("partitionDensityPath >=", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathLessThan(String value) {
            addCriterion("partitionDensityPath <", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathLessThanOrEqualTo(String value) {
            addCriterion("partitionDensityPath <=", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathLike(String value) {
            addCriterion("partitionDensityPath like", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathNotLike(String value) {
            addCriterion("partitionDensityPath not like", value, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathIn(List<String> values) {
            addCriterion("partitionDensityPath in", values, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathNotIn(List<String> values) {
            addCriterion("partitionDensityPath not in", values, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathBetween(String value1, String value2) {
            addCriterion("partitionDensityPath between", value1, value2, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andPartitiondensitypathNotBetween(String value1, String value2) {
            addCriterion("partitionDensityPath not between", value1, value2, "partitiondensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathIsNull() {
            addCriterion("energyDensityPath is null");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathIsNotNull() {
            addCriterion("energyDensityPath is not null");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathEqualTo(String value) {
            addCriterion("energyDensityPath =", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathNotEqualTo(String value) {
            addCriterion("energyDensityPath <>", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathGreaterThan(String value) {
            addCriterion("energyDensityPath >", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathGreaterThanOrEqualTo(String value) {
            addCriterion("energyDensityPath >=", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathLessThan(String value) {
            addCriterion("energyDensityPath <", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathLessThanOrEqualTo(String value) {
            addCriterion("energyDensityPath <=", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathLike(String value) {
            addCriterion("energyDensityPath like", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathNotLike(String value) {
            addCriterion("energyDensityPath not like", value, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathIn(List<String> values) {
            addCriterion("energyDensityPath in", values, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathNotIn(List<String> values) {
            addCriterion("energyDensityPath not in", values, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathBetween(String value1, String value2) {
            addCriterion("energyDensityPath between", value1, value2, "energydensitypath");
            return (Criteria) this;
        }

        public Criteria andEnergydensitypathNotBetween(String value1, String value2) {
            addCriterion("energyDensityPath not between", value1, value2, "energydensitypath");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}