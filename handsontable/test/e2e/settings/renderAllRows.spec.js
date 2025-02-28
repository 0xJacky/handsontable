describe('settings', () => {
  describe('renderAllRows', () => {
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

      expect(getSettings().renderAllRows).toBe(false);
    });

    it('should pass the option value to the Walkontable', () => {
      const hot = handsontable({
        renderAllRows: true,
      });

      expect(hot.view._wt.getSetting('renderAllRows')).toBe(true);
    });

    it('should not be possible to change the value after table initialization', () => {
      handsontable({
        renderAllRows: false,
      });

      expect(() => {
        updateSettings({
          renderAllRows: true,
        });
      }).toThrowError('The `renderAllRows` option can not be updated after the Handsontable is initialized.');
    });
  });
});
