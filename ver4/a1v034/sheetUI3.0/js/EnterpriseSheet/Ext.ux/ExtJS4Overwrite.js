/**
 * Enterprise Spreadsheet Solutions
 * Copyright(c) CubeDrive Inc. All right reserved.
 * info@enterpriseSheet.com
 * http://www.enterpriseSheet.com
 * 
 * Licensed under the EnterpriseSheet Commercial License.
 * http://enterprisesheet.com/license.jsp
 * 
 * You need to have a valid license key to access this file.
 */
Ext.override(Ext.menu.Menu, {
    onMouseLeave: function(e) {
    var me = this;

    var visibleSubmenu = false;
    me.items.each(function(item) { 
        if(item.menu && item.menu.isVisible()) { 
            visibleSubmenu = true;
        }
    })
    if(visibleSubmenu) {
        return;
    }

    me.deactivateActiveItem();

    if (me.disabled) {
        return;
    }

    me.fireEvent('mouseleave', me, e);
    }
});


