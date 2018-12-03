(defun get-file (filename)
  (with-open-file (stream filename)
    (loop for line = (read-line stream nil)
          while line
          collect line)))

(write
    (apply '+
    (mapcar 'parse-integer (get-file "./input"))))
