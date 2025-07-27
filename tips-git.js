Ext.define('EAM.custom.external_eugexm', {
    extend: 'EAM.custom.AbstractExtensibleFramework',
    getSelectors: function () {
        var me = this;
        return {
            '[extensibleFramework] [tabName=HDR]': {

                beforesaverecord: function () {

                },

                afternewrecord: function () {
                    // test ticket 2
                },

              
                aftersaverecord: function () {
                 // test de brache ticket 1
                },
                afterrender: function () {
                  //modification sur afterrender
                },


            },
        }}

});

