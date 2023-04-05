function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    if (bytes === 0) return "0 Byte"
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return {
        size: Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i],
        sizeInKb: Math.round(bytes / 1024),
    }
}

export const useFileTypeRestrict = (file, accept, maxSize, limit) => {
    if (file && file[0]?.name) {
        const fileType = file && file[0]?.name?.split('.')[1]
        const { size, sizeInKb } = bytesToSize(file && file[0]?.size)

        const acceptTypes = accept?.split(',')

        if (acceptTypes?.includes(fileType?.toString())) {
            if (sizeInKb <= parseInt(maxSize)) {
                return {
                    isSuccess: true,
                    fileTypeError: null,
                }
            } else return {
                isSuccess: false,
                fileTypeError: `It is allowed to upload files up to ${limit}, but you uploaded ${size} ,`,
            }
        } else {
            return {
                isSuccess: false,
                fileTypeError: 'File type not supported!',
            }
        }
    } else return {}

};
