Ext.define('EAM.custom.external_eugexm', {
    extend: 'EAM.custom.AbstractExtensibleFramework',
    getSelectors: function () {
        var me = this;
        return {
            '[extensibleFramework] [tabName=HDR]': {

                beforesaverecord: function () {

                },

                afternewrecord: function () {
                    
                },

                afterrecordchange: function () {
                 
                },
                aftersaverecord: function () {
                 
                },
                afterrender: function () {
                  
                },


            },
        }}

});

