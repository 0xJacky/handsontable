describe('settings', () => {
  describe('renderAllColumns', () => {
    const id = 'testContainer';

    beforeEach(function() {
      this.$container = $(`<div id="${id}"></div>`).appendTo('body');
    });

    afterEach(function() {
      if (this.$container) {
        destroy();
        this.$container.remove();
      }
    });

    it('should be `false` by default', () => {
      handsontable({});

      expect(getSettings().renderAllColumns).toBe(false);
    });

    it('should pass the option value to the Walkontable', () => {
      const hot = handsontable({
        renderAllColumns: true,
      });

      expect(hot.view._wt.getSetting('renderAllColumns')).toBe(true);
    });

    it('should not be possible to change the value after table initialization', () => {
      handsontable({
        renderAllColumns: false,
      });

      expect(() => {
        updateSettings({
          renderAllColumns: true,
        });
      }).toThrowError('The `renderAllColumns` option can not be updated after the Handsontable is initialized.');
    });
  });
});
